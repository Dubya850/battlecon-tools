
var app = angular.module('formApp', []);
app.controller('btlcnForm', function ($scope, $http) {
    // $scope.fighters = ["Adjenna Callista","Almighty Abilities","Almighty Bases","Almighty Bases","Alternate Costumes","Alternate Costumes","Alumis","Amon Elcela","Anath Adrasteia","Arec Russel Zane","Aria","Baenvier Marlgrove","Bases & Special Actions","Bases & Special Actions","Bases & Special Actions","Bases & Special Actions","Beta Bases","Blank cards","Blank cards","Borneo","Bridj","Bruce Lee","Burgundy XII","Byron Krane","Cadenza","Cesar Grist","Cherri Seneca","Cindra Flama","Clinhyde Eight","Clive Melmont","Dareios Kuel","Demitras Denigrande","Dr. Victor Ramos","Dravil Coldwater","Eligor Larington","Eliza","Endbryt","Ernie the Geek","EX Abilities","Ex Bases","EX Bases","Flight Cards","Flight Cards","Foil Almighty Bases","Foil EX Bases","Gaspar Geddon","Gerard Matranga","Gold","Havoc","Hayden Morgan","Hepzibah Culotre","Hepzibah Pacts","Hikaru Sorayama","Iaxus the Shattered","Irialandradayamorella","Iris","Iskra Brimstone","Jager Brandtford","Jin","Joal Kalmor","Juto","Kaitlyn Van Sorrel","Kajia Septie Salix","Kallistar Flarechild","Karin & Jager Brandtford","Kehrolyn Ross","Khadath Ahemusei","King Alexian XXXVII","Larimore Burman","Larimore Burman","Legacy","Lesandra Machan","Lixis Ran Kanda","Lord Cairngort Rexan","Lord Eustace","Luc von Gott","Lucida Malephaise","Lucius","Lymn","Magdelina Larington","Malandrax Mecchi","Mark.PTO","Marmelee Greyheart","Merjoram Alexian","Mikhail Isen","Nehtali","Oriana Vellopholetta","Ottavvia Six","Pendros Schalla","Portable Board","Prince Elien","Raederick Blackforge","Raritti Sikhar","Regicide Heketch","Rukyuk Amberdeen","Runika & Udstad","Runika Zananen","Sagas Seities","Sarafina Vanedran","Seth Cremmul","Shekhtur Lenmorre","Special Action","Strikers","Strikers","Takeshi Kamikaze","Tanis Trilives","Tatsumi Nuoc & Juto","Thessala Three","Trias Blackwind","Twilight Magdelina","Uleyle Kimbhe","Vanaah","Vincent Grey","Voco Astrum","Wardlaw O'Brien","Welsie Acktern","Xenitia Zook","Zaamassal Kett", "Other"]
    $scope.fighters = [
        {name : 'Adjenna Callista'},{name : 'Alumis'},{name : 'Amon Elcela'},{name : 'Anath Adrasteia'},{name : 'Arec Russel Zane'},{name : 'Aria'},{name : 'Baenvier Marlgrove'},{name : 'Borneo'},{name : 'Bridj'},{name : 'Bruce Lee'},{name : 'Burgundy XII'},{name : 'Byron Krane'},{name : 'Cadenza'},{name : 'Cesar Grist'},{name : 'Cherri Seneca'},{name : 'Cindra Flama'},{name : 'Clinhyde Eight'},{name : 'Clive Melmont'},{name : 'Dareios Kuel'},{name : 'Demitras Denigrande'},{name : 'Dr. Victor Ramos'},{name : 'Dravil Coldwater'},{name : 'Eligor Larington'},{name : 'Eliza'},{name : 'Endbryt'},{name : 'Ernie the Geek'},{name : 'Gaspar Geddon'},{name : 'Gerard Matranga'},{name : 'Gold'},{name : 'Havoc'},{name : 'Hayden Morgan'},{name : 'Hepzibah Culotre'},{name : 'Hepzibah Pacts'},{name : 'Hikaru Sorayama'},{name : 'Iaxus the Shattered'},{name : 'Irialandradayamorella'},{name : 'Iris'},{name : 'Iskra Brimstone'},{name : 'Jager Brandtford'},{name : 'Jin'},{name : 'Joal Kalmor'},{name : 'Juto'},{name : 'Kaitlyn Van Sorrel'},{name : 'Kajia Septie Salix'},{name : 'Kallistar Flarechild'},{name : 'Karin & Jager Brandtford'},{name : 'Kehrolyn Ross'},{name : 'Khadath Ahemusei'},{name : 'King Alexian XXXVII'},{name : 'Larimore Burman'},{name : 'Larimore Burman'},{name : 'Legacy'},{name : 'Lesandra Machan'},{name : 'Lixis Ran Kanda'},{name : 'Lord Cairngort Rexan'},{name : 'Lord Eustace'},{name : 'Luc von Gott'},{name : 'Lucida Malephaise'},{name : 'Lucius'},{name : 'Lymn'},{name : 'Magdelina Larington'},{name : 'Malandrax Mecchi'},{name : 'Mark.PTO'},{name : 'Marmelee Greyheart'},{name : 'Merjoram Alexian'},{name : 'Mikhail Isen'},{name : 'Nehtali'},{name : 'Oriana Vellopholetta'},{name : 'Ottavvia Six'},{name : 'Pendros Schalla'},{name : 'Portable Board'},{name : 'Prince Elien'},{name : 'Raederick Blackforge'},{name : 'Raritti Sikhar'},{name : 'Regicide Heketch'},{name : 'Rukyuk Amberdeen'},{name : 'Runika & Udstad'},{name : 'Runika Zananen'},{name : 'Sagas Seities'},{name : 'Sarafina Vanedran'},{name : 'Seth Cremmul'},{name : 'Shekhtur Lenmorre'},{name : 'Special Action'},{name : 'Strikers'},{name : 'Strikers'},{name : 'Takeshi Kamikaze'},{name : 'Tanis Trilives'},{name : 'Tatsumi Nuoc & Juto'},{name : 'Thessala Three'},{name : 'Trias Blackwind'},{name : 'Twilight Magdelina'},{name : 'Uleyle Kimbhe'},{name : 'Vanaah'},{name : 'Vincent Grey'},{name : 'Voco Astrum'},{name : 'Wardlaw OBrien'},{name : 'Welsie Acktern'},{name : 'Xenitia Zook'},{name : 'Zaamassal Kett'},{name : 'Other'}
      ];
      $scope.scale = [
            {id:1, name:'Absolutely'},
            {id:2, name:'2'},
            {id:3, name:'3'},
            {id:4, name:'4'},
            {id:5, name:'5'},
            {id:6, name:'6'},
            {id:7, name:'7'},
            {id:8, name:'8'},
            {id:9, name:'9'},
            {id:10, name:'Not at all'},
    ];

});