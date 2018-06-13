import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HttpClient} from '@angular/common/http';

/**
 * Generated class for the DescriptionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-description',
  templateUrl: 'description.html',
  
})
 

export class DescriptionPage {
//moviedata: Observable<any>;
moviedata : any;
//apikey: 'apikey=a2678ddc';
//baseurl: 'http://www.omdbapi.com/?type=series&s=game&';
title: any;
   constructor(public navCtrl: NavController, public httpClient: HttpClient, public navParams: NavParams) { 
   	var apikey = '&apikey=a2678ddc';
   	var baseurl = 'http://www.omdbapi.com/?type=series&';
   	//var title = "";
   	this.title = this.navParams.get('data');	
   	var url = baseurl+'plot=full&' +  't=' + this.title.Title + apikey; 
   	this.moviedata = this.httpClient.get(url)
   	.subscribe(value => {
   		this.moviedata = value;
   		console.log(this.moviedata);
   	}, error => error, () => {

   	});
   	
  	
   
  }

  ionViewDidLoad() {


  	
  }

}
