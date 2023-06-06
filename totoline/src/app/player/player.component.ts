import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent {
  ngOnInit() {
    setInterval(() => {
      this.updateProjectilePosition();
    }, 100); // Intervalo de tiempo para actualizar la posición de la pelotita, ajusta según tus necesidades
  }

    posX: number = 0;
  posY: number = 0;
  speed: number = 0.5;

  spriteIndex: number = 0;

  projectileX: number = 0;
projectileY: number = 0;
projectileVisible: boolean = false;

ballImage = "../../assets/sprites/disparo.png";

playerVisible: boolean = true;


  @HostListener('window:keydown', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    switch (event.key) {
      case 'ArrowRight':
        this.projectileVisible = false;
        this.moveRight();
        break;
      case 'ArrowLeft':
        this.projectileVisible = false;
        this.moveLeft();
        break;
      case 'ArrowUp':
        this.projectileVisible = false;
        this.moveUp();
        break;
      case 'ArrowDown':
        this.projectileVisible = false;
        this.moveDown();
        break;
        case 'p':
          case 'P':
            this.shoot();
            break;
    }
  }

  moveLeft() {
    this.posX -= this.speed;
    this.spriteIndex = (this.spriteIndex + 1) % 6;
  }

  moveRight() {
    this.posX += this.speed;
    this.spriteIndex = (this.spriteIndex + 1) % 6;
  }

  moveUp() {
    this.posY -= this.speed;
    this.spriteIndex = (this.spriteIndex + 1) % 6;
  }

  moveDown() {
    this.posY += this.speed;
    this.spriteIndex = (this.spriteIndex + 1) % 6;
  }

  ballX: number = 0; // Posición horizontal de la pelotita
  screenWidth: number = window.innerWidth; // Ancho de la pantalla

shoot() {
  if (!this.projectileVisible) {
    this.projectileX = this.posX + 20; // Ajusta la posición del proyectil según la posición del jugador
    this.projectileY = this.posY + 10; // Ajusta la posición del proyectil según la posición del jugador
    this.projectileVisible = true;
    this.ballX = this.projectileX; // Establece la posición horizontal inicial de la pelotita
  } else {
    this.projectileVisible = false;
    this.ballX = 0; // Reinicia la posición horizontal de la pelotita
  }
}

updateProjectilePosition() {
  if (this.projectileVisible) {
    this.ballX += 5; // Velocidad de movimiento del disparo, ajusta según tus necesidades
    if (this.ballX >= this.screenWidth) {
      this.projectileVisible = false; // Desaparece el disparo cuando alcanza el borde de la pantalla
      this.playerVisible = true; // Vuelve a mostrar la imagen del jugador
    }
  }
}

  getSprite() {
    if (this.projectileVisible) {
      return 'shoot';
    } else {
      
      return 'move_' + this.spriteIndex;
    }
  }

}
