import { Scene, GameObjects } from 'phaser';
import axios from 'axios';
import { currentUser, setCurrentUser} from './currentUser';
import { use } from 'matter';

export class SignIn extends Scene {
    background!: GameObjects.Image;
    title!: GameObjects.Text;
    backToMenuText!: GameObjects.Text;
    signInForm!: HTMLFormElement;
    submitButton!: HTMLButtonElement;
    signInText!: GameObjects.Text;
    signUpText!: GameObjects.Text;
    slash!: GameObjects.Text;
    isSignIn: boolean = true;
    formContent: string = '';
    isSignInError: boolean = false;
    isSignUpError: boolean = false;
    errorMessage!: GameObjects.Text;

    constructor() {
        super('SignIn');
    }

    create() {
        const screenWidth = 1024;
        const screenHeight = 768;
        this.scale.resize(screenWidth, screenHeight);

        this.background = this.add.image(screenWidth / 2, screenHeight / 2, "background");
        this.background.setScale(screenWidth / this.background.width, screenHeight / this.background.height);

        const graphics = this.add.graphics();
        graphics.fillStyle(0x000000, 0.5);
        graphics.fillRoundedRect(10, 60, 1000, 700, 20);
        graphics.setDepth(0);

        this.title = this.add.text(512, 120, 'Account Login', {
            fontFamily: 'Arial Black', fontSize: 90, color: '#ffffff',
            stroke: '#000000', strokeThickness: 8,
            align: 'center'
        }).setOrigin(0.5);

        this.createSignInForm(screenWidth, screenHeight);

        this.createSwitchableText();

        this.handleFormSubmission();


        this.backToMenuText = this.add.text(25, 25, '< Back to Main Menu >', {
            fontFamily: 'Arial Black', fontSize: 18, color: '#ffffff',
            stroke: '#000000', strokeThickness: 8,
            align: 'center'
        }).setInteractive();
        this.backToMenuText.on('pointerdown', () => {
            this.signInForm.remove();
            this.scene.stop('SignIn').start('MainMenu');
        });

        const errorMessage = this.isSignInError === true
            ? 'Incorrect username or password, please try again.'
            : this.isSignUpError === true
                ? 'Username already in use, please try another username.'
                : '';

          this.errorMessage = this.add.text(500, 550, errorMessage , {
            fontFamily: 'Arial Black', fontSize: 18, color: '#FF0000',
            stroke: '#000000', strokeThickness: 8,
            align: 'center'}).setOrigin(0.5);
    }


    update() {
        if (!this.scene.isActive('SignIn') && this.signInForm) {
            this.formContent = this.signInForm.outerHTML;
            this.signInForm.remove();
        }
    }

    private createSignInForm(screenWidth: number, screenHeight: number) {
        const formX = 800; 
        const formY = 300; 
    
        this.signInForm = document.createElement('form');
        this.signInForm.action = 'javascript:void(0)';
        this.signInForm.style.position = 'absolute';
        this.signInForm.style.left = formX + 'px'; 
        this.signInForm.style.top = formY + 'px'; 
        this.signInForm.style.textAlign = "center";
    
        const usernameLabel = document.createElement('label');
        usernameLabel.htmlFor = 'username';
        usernameLabel.innerText = 'Username: ';
        this.addLabelStyle(usernameLabel);
        this.signInForm.appendChild(usernameLabel);
        const usernameInput = document.createElement('input');
        usernameInput.type = 'text';
        usernameInput.name = 'username';
        usernameInput.placeholder = 'Enter your username';
        usernameInput.required = true;
        usernameInput.style.display = 'block'; 
        usernameInput.style.margin = '0 auto'; 
        usernameInput.style.width = '300px';
        usernameInput.style.fontSize = '24px';
        this.signInForm.appendChild(usernameInput);
        this.signInForm.appendChild(document.createElement('br'));
        this.signInForm.appendChild(document.createElement('br'));
    
        const passwordLabel = document.createElement('label');
        passwordLabel.htmlFor = 'password';
        passwordLabel.innerText = 'Password: ';
        this.addLabelStyle(passwordLabel);
        this.signInForm.appendChild(passwordLabel);
        const passwordInput = document.createElement('input');
        passwordInput.type = 'password';
        passwordInput.name = 'password';
        passwordInput.placeholder = 'Enter your password';
        passwordInput.required = true;
        passwordInput.style.display = 'block'; 
        passwordInput.style.margin = '0 auto'; 
        passwordInput.style.width = '300px';
        passwordInput.style.fontSize = '24px';
        this.signInForm.appendChild(passwordInput);
        this.signInForm.appendChild(document.createElement('br'));
        this.signInForm.appendChild(document.createElement('br'));
    
        this.submitButton = document.createElement('button');
        this.submitButton.type = 'submit';
        this.setSubmitButtonText();
        this.submitButton.style.display = 'block';
        this.submitButton.style.margin = '0 auto'; 
        this.submitButton.style.fontSize = '30px';
        this.signInForm.appendChild(this.submitButton);

        document.body.appendChild(this.signInForm);
     
    }
    
    private createSwitchableText() {
        this.signInText = this.add.text(250, 200, '< Sign In >', this.getTextStyle()).setInteractive();
        this.signInText.on('pointerdown', () => {
            this.isSignIn = true;
            this.setSubmitButtonText();
            this.signInText.setColor('#ffffff');
            this.signUpText.setColor('#808080');
        });

        this.slash = this.add.text(500, 200, "/", this.getTextStyle());

        this.signUpText = this.add.text(550, 200, '< Sign Up >', {
            ...this.getTextStyle(),
            color: '#808080'
        }).setInteractive();
        this.signUpText.on('pointerdown', () => {
            this.isSignIn = false;
            this.setSubmitButtonText();
            this.signUpText.setColor('#ffffff');
            this.signInText.setColor('#808080');
        });
    }

    private handleFormSubmission() {
        this.signInForm.addEventListener('submit', async (event) => {
            event.preventDefault(); 
            const username = (this.signInForm.querySelector('input[name="username"]') as HTMLInputElement).value;
            const password = (this.signInForm.querySelector('input[name="password"]') as HTMLInputElement).value;
            if (this.isSignIn) {
                let foundError = false;

                await axios.get(`https://game-app-be-v2.onrender.com/users/${username}`).then((response) => {
                    setCurrentUser(response.data.user.username);
                }).catch((error) => {
                    foundError = true;
                    console.error(error);
                });

                if (foundError === false){
                    this.signInForm.remove()
                    this.isSignInError = false
                    this.scene.stop('SignIn').start('SignInConfirmed');
                } else {
                    this.signInForm.remove()
                    this.isSignInError = true
                    this.scene.stop('SignIn').start('SignIn');


                }
                
            } else {
                let foundError= false;
                const body = {username: username, password : password}

                await axios.post(`https://game-app-be-v2.onrender.com/users/`, body).then((response) => {
                    setCurrentUser(response.data.user.username)
                }).catch((error) => {
                    foundError = true;
                    console.error(error);
                });
                
                if (foundError === false){
                    this.signInForm.remove()
                    this.isSignUpError = false
                    this.isSignIn = true
                    this.scene.stop('SignIn').start('SignInConfirmed');
                } else {
                    this.signInForm.remove()
                    this.isSignIn = true
                    this.isSignUpError = true
                    this.scene.stop('SignIn').start('SignIn');

                }
            }
            (this.signInForm.querySelector('input[name="username"]') as HTMLInputElement).value = '';
            (this.signInForm.querySelector('input[name="password"]') as HTMLInputElement).value = '';
        });
    }

    private setSubmitButtonText() {
        this.submitButton.innerText = this.isSignIn ? 'Sign In' : 'Sign Up';
    }

    private getTextStyle() {
        return {
            fontFamily: 'Arial Black', fontSize: 36, color: '#ffffff',
            stroke: '#000000', strokeThickness: 8,
        };
    }

    private addLabelStyle(label: HTMLLabelElement) {
        label.style.fontFamily = 'Arial Black';
        label.style.fontSize = '24px';
        label.style.color = '#ffffff';
        label.style.textShadow = '2px 2px #000000';
        label.style.textAlign = 'right';
    }
}