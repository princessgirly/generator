$(document).ready(function() {

  var teamDone = false;


  var Hat = function() {
    var students = ["Nadege", "Sarah", "Jeanne d'arc", "Jousna", "Juliette", "Karine", "Yannic", "Yannick", "Jerome", "Florent", "KevinL", "KevinC", "Ahmed", "Flavien", "Abdel-malik", "Ryadh", "Marc", "Anthony", "Bruno", "Simon"];

    // creation 1 équipe
    this.chance = function(nb, studTmp) {
      var newTeam = [];
      var studTmp2 = students.slice(0);
      for (var i = 0; i < nb; i++) {
        if (studTmp) {
          var index = Math.floor(Math.random() * (studTmp.length - 1));
          newTeam.push(studTmp.splice(index, 1).join());
        } else {
          var index = Math.floor(Math.random() * (studTmp2.length - 1));
          newTeam.push(studTmp2.splice(index, 1).join());
        }
      }
      return studTmp ? [newTeam, studTmp] : newTeam;
    };

    // creation des équipes
    this.team = function(nb) {
      var newTeams = [];
      var nbTeam = Math.floor(students.length / nb);
      var studTmp = students.slice(0);

      for (var i = 0; i < nbTeam; i++) {
        var tmp = this.chance(nb, studTmp);
        newTeams.push(tmp[0]);
        studTmp = tmp[1];
      }
      return [newTeams, studTmp];
    }

  };

  // genere 1 équipe
  $('.chance').on("click", function(e) {
    e.preventDefault();
    $('.resultat').show();
    if(teamDone) $('.resultat').empty();
    teamDone = false;

    var myTeams = new Hat();
    var nombre = $('.nb').val();
    var res = myTeams.chance(nombre);
    var rand = Math.floor(Math.random() * 1000);

    $('.resultat').append('<ul class="' + rand + '">');
    res.map(function(a) {
      $('.resultat .' + rand).append('<li>' + a + '</li>');
    });
  });

// genere toutes les équipes

  $('.teamBtn').on("click", function(e) {
    teamDone = true;
    e.preventDefault();
    $('.resultat').show();
    $('.resultat').empty();

    var myTeams = new Hat();
    var nombre = $('.nb').val();
    var res = myTeams.team(nombre);


    for (var i = 0; i < res[0].length; i++) {
      var rand = Math.floor(Math.random() * 1000);
      $('.resultat').append('<ul class="' + rand + '">');
      res[0][i].map(function(a) {
        $('.resultat .' + rand).append('<li>' + a + '</li>');
      });
    }
      var rand = Math.floor(Math.random() * 1000);
      $('.resultat').append('<ul class="' + rand + '">');
      res[1].map(function(a) {
        $('.resultat .' + rand).append('<li>' + a + '</li>');
      });

  });

  var eleve = new Hat();

  console.log(eleve.chance(4));
  var equipe = eleve.team(3)
  console.log(equipe[0]);
  console.log(equipe[1]);
});
