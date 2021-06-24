

var app4 = new Vue({
  el: '#app-4',
  data: {
	  czy_zakonczone:"false",
	  polefiltru: "data_przyjecia",
    filtr: "",
	  pokaz_zasoby:"false",
    
	todos:[  ]
  },
  methods: {
    addNew: function () {
this.todos.push({data_przyjecia:'' ,
dane_klienta:'' ,
adres: '',
zasoby: [
{nazwa:'Nazwa zasobu',
ilosc:'0',
cena:'0',}
],
dokumenty: [

{nazwa:'nazwa dokumentu',

plik:' '}
],

przyblizona_data: '12.21.432123',
uwagi: '',
faktura: '',
wykonane: 'false' 
	
})
  },
  wartoscZlecenia: function (index_zlecenia) {
	  var suma = 0;
	  
	  for (nr_zasobu in this.todos[index_zlecenia].zasoby) {
  suma += (this.todos[index_zlecenia].zasoby[nr_zasobu].ilosc * this.todos[index_zlecenia].zasoby[nr_zasobu].cena)
}
	  
	  return suma;

  },
  

      

   
  
  addZasoby: function (index_zlecenia) {
this.todos[index_zlecenia].zasoby.push({
nazwa:'Nazwa zasobu',
ilosc:'0',
cena:'0',
})
  },
  
  dodajDokument: function (index_zlecenia) {
this.todos[index_zlecenia].dokumenty.push({
nazwa:'opis dokumentu',
plik:'link do pliku'})
  },
  
  filtrZawiera: function(index_zlecenia) {
	 //console.log(this.todos[index_zlecenia],this.polefiltru, this.filtr);
     return this.todos[index_zlecenia][this.polefiltru].toLowerCase().includes(this.filtr.toLowerCase())
      
    },
  
  
	usunzasob: function (index_zlecenia , index_zasobu) {
		this.todos[index_zlecenia].zasoby.splice(index_zasobu, 1);
		console.log(index_zlecenia, index_zasobu)
  },
  
  usunDokument: function (index_zlecenia , index_dokumentu) {
		this.todos[index_zlecenia].dokumenty.splice(index_dokumentu, 1);
		
  },
  
  
	usunzlecenie: function (index_zlecenia) {
		this.todos.splice(index_zlecenia, 1);
  }
  
},

pokaZasoby: function (index_zlecenia) {

},

created: function () {
	
if (localStorage.getItem("zlecenia") != null){
	
	this.todos = JSON.parse(localStorage.getItem("zlecenia"));
}
										
else {  alert("Brak zapisanych zleceń")	}
	


					},

filters: {
    
    searchFor: function(value, searched) {
      
      //console.log( value, searched, value.search(searched) )
      if ( value.search(searched) != -1 ) return value
      //else return "nazwa nie zawiera " + searched
    },
}
});

function scrol() {
  var elmnt = document.getElementById("scroll");
  elmnt.scrollIntoView();
}

function zapisz_wszystko(){
	localStorage.setItem("zlecenia", JSON.stringify(app4.todos));

}

function wczytaj_wszystko(){
	this.todos = JSON.parse(localStorage.getItem("zlecenia"));
}








function updateFileName(event, index_zlecenia, index_dokumentu){

console.log(event.target.files[0].name , index_zlecenia, index_dokumentu);


app4.todos[index_zlecenia].dokumenty[index_dokumentu].plik = event.target.files[0].name;
}




function pokazZasoby(target) {
	
	if( target.getAttribute("otwarte") == "false") {
		
		target.setAttribute("otwarte", "true")

	}
	else target.setAttribute("otwarte", "false")
}
