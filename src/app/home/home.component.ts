import { Component, NgModule,OnInit } from '@angular/core';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})



export class HomeComponent implements OnInit{

  h1_title : any ;
  // = 'Nous aidons les startups à lancer leurs produits';
  p_parag  !: string ;
  // = 'Etiam sed. Interdum consequat proin vestibulum class at a euismod mus luctus quam Lorem ipsum dolor sit amet, consectetur adipisicing eli.';
  form_title !: string ;
  // ='Obtenez un essai GRATUIT de 30 jours';

  nom !: string ;
  // = 'nom' ;
  email !:string ;
  // = 'email'; 
  message !: string ;
  // = 'message';
  image : any  ;

  button !: string ;

ngOnInit () {
  this.h1_title= "Nous aidons les startups à lancer leurs produits";
  this.p_parag="Etiam sed. Interdum consequat proin vestibulum class at a euismod mus luctus quam Lorem ipsum dolor sit amet, consectetur adipisicing eli.";
  this.form_title= "Obtenez un essai GRATUIT de 30 jours";
  this.nom="nom";
  this.email="email";
  this.message="message";
  this.button= "envoyer";
  this.image= "/assets/img-2(1).jpg";

}





















  // SendFORM() {
  //   console.log('formulaire envoyé');
  //   alert("Votre Formulaire a été Envoyer avec succès");
  //   console.log('nom:', this.nom);
  //   console.log('email:',this.email );
  //   console.log('message', this.message);


  //   this.nom= '';
  //   this.email='';
  //   this.message='';
  // }
  // formulaires: any[] = [
  //   {id: 1, nom :'Formulaires'}
  // ]
}

