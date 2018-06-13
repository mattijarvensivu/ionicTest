import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {HttpClient} from '@angular/common/http';
//import { HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs/Rx';
import {DescriptionPage} from '../description/description';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'

})
export class HomePage {
	movies: Observable<any>;

   constructor(public navCtrl: NavController, public httpClient: HttpClient) { 
   	var apikey = 'apikey=a2678ddc';
   	var baseurl = 'http://www.omdbapi.com/?type=series&s=Black&';


	var url = baseurl + apikey;
	console.log(url);
	this.movies = this.httpClient.get(url);
	console.log(this.movies);



  /* 	const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': '  Bearer BQDnFW7UtVJmcIzBykXPe3UgW47wkyIB7x3REWWuLKQOV0RVLmX7M2e5MU0EyChiOYRTMbZZP8aaPnxp1PyMtK1wJ9Rvq4QuSTWuLGzdr3MwwDCq2pKAEcXDrWlVeo2fFrW1wm1jhRA7zp0xefCM'
  }) 
};*/




 //this.onecategory = this.httpClient.get(url, httpOptions); 


  }

	
moreinfo(data){
	this.navCtrl.push(DescriptionPage, {data: data});
}

 

}
