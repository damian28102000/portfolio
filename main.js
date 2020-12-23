var e = "guest@damian-tomczak.pl";

var commandText = function(text) {
    return "[[g;#EEEEEE;]" + text + "]";
}

var App = {
  meme: function() {
    this.echo($('<img src="meme.jpg">'));
  },
  intro: function(ret){
    if (typeof ret === 'undefined') ret = false;
    var greetText = 
      "   ___             _             ______                       __  \n"+
      "  / _ \\___ ___ _  (_)__ ____    /_  __/__  __ _  __________ _/ /__\n"+
      " / // / _ `/  \' \\/ / _ `/ _ \\    / / / _ \\/  \' \\/ __/_ / _ `/  \'_/\n"+
      "/____/\\_,_/_/_/_/_/\\_,_/_//_/   /_/  \\___/_/_/_/\\__//__|_,_/_/\\_\\ \n\n"+
      "Copyright (c) 2020 Damian Tomczak <https://damian-tomczak.pl>\n"+
      "This website uses cookies to provide services at the highest level.\n"+
      "Further use of the website means that you agree to their use.\n\n"+
      "Type "+commandText('help')+" to explore resources on this page\n";
    if (!ret) {
        this.echo(greetText);
    } else {
        return greetText;
    }
  },
  help: function(){
    this.echo();
    this.echo("|  " + commandText("about") + "              - About Me");
    this.echo("|  " + commandText("contact") + "            - Contact to me");
    this.echo("|  " + commandText("projects") + "           - Professional Experience");
    this.echo("|");
    this.echo("|  [[u;inherit;]The site is still under construction, finish it when I have time]");
    this.echo();
  },
  contact: function(){
    this.echo();
    this.echo("|  kontakt@damian-tomczak.pl");
    this.echo();
  },
  about: function(){
    this.echo();
    this.echo("|  About:        I am a " + commandText('computer science student') + " specializing in IT systems engineering at " + commandText('Uniwersytet Warmińsko-Mazurski w Olsztynie') +".");
    this.echo("|                I also obtained the title of IT technician in Zespół Szkół Zawodowych nr 1 w Ostrołęce");
    this.echo("|                I will help you implement all kinds of IT solutions.");
    this.echo("|                Contact me via e-mail at the address available under the command " +commandText("contact")+". I will definitely contact you.");
    this.echo("|                Apart from the IT world, I am interested in role-playing games, cinematography, music and playing sports");
    this.echo("|");
    this.echo("|  More here:   [soon]");
    this.echo();
  },
  projects: function(){
    this.echo();
    this.echo("|  <https://blog.damian-tomczak.pl> ");
    this.echo("|  <https://cytaty.damian-tomczak.pl> ");
    this.echo();
  },
  cls: function(){
    this.clear();
  },
  clear: function(){
    this.clear();
  },
  mobile: function(ret){
    if (typeof ret === 'undefined') ret = true;
    var greetText = 
      "[[g;#5BD100;]Damian Tomczak]\n"+
      "I'm sorry, but the site does not support mobile devices,\nI encourage you to check it on a larger display.\n\n"+
      "[[g;#B2D100;]Contact]"+
      "\nkontakt@damian-tomczak.pl\n";
    if (!ret) {
        that.clear();
        that.echo(greetText);
    } else {
        return greetText;
    }
  },
}

jQuery(document).ready(function($) {
  
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    $('body').terminal(App, {
          greetings: function(callback) {
              that = this;
              callback(App.mobile());
              
          },
          prompt: function(p){
              var path = '~'
              p(e + ":" + path + "# ");
          }
      });    
  }
  else {
      $('body').terminal(App, {
          greetings: function(callback) {
              callback(App.intro(true));
          },
          prompt: function(p){
            var path = '~'
            p(e + ":" + path + "# ");
        }
    });
  }
  
});

  