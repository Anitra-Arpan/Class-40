class Player {
  constructor(){
    this.index = null;
    this.distance = 0;
    this.name = null;
    this.rank = 0;
  }

  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",(data)=>{
      playerCount = data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({
      playerCount: count
    });
  }

  update(){
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).set({
      name:this.name,
      distance:this.distance
    });
  }

  static getPlayerInfo(){
    var playerInfoRef = database.ref('players');
    playerInfoRef.on("value",(data)=>{
      allPlayers = data.val();
    })
  }

   getCarsAtEnd (){
    var rankRef = database . ref('cars_at_end');
    rankRef . on ("value", (cars_at_end)=>{
      this . rank  = cars_at_end . val () ;
    });
  }

  static update_cars_at_end (rank) {
    database.ref('/'). update({
      cars_at_end : rank 
    })
  }

}
