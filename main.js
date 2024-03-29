 

const { createApp }=Vue
createApp({
  data(){
      return{
        user:{
            name:'Nome Utente',
            avatar:'_io'
        },
        contacts:
         [
            {
            name: 'Michele',
            avatar: '_1',
            visible: true,
            messages: [
            {
            date: '10/01/2020 15:30:55',
            message: 'Hai portato a spasso il cane?',
            status: 'sent'
            },
            {
            date: '10/01/2020 15:50:00',
            message: 'Ricordati di stendere i panni',
            status: 'sent'
            },
            {
            date: '10/01/2020 16:15:22',
            message: 'Tutto fatto!',
            status: 'received'
            }
            ],
            },
            {
            name: 'Fabio',
            avatar: '_2',
            visible: true,
            messages: [
            {
            date: '20/03/2020 16:30:00',
            message: 'Ciao come stai?',
            status: 'sent'
            },
            {
            date: '20/03/2020 16:30:55',
            message: 'Bene grazie! Stasera ci vediamo?',
            status: 'received'
            },
            {
            date: '20/03/2020 16:35:00',
            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
            status: 'sent'
            }
            ],
            },
            {
            name: 'Samuele',
            avatar: '_3',
            visible: true,
            messages: [
            {
            date: '28/03/2020 10:10:40',
            message: 'La Marianna va in campagna',
            status: 'received'
            },
            {
            date: '28/03/2020 10:20:10',
            message: 'Sicuro di non aver sbagliato chat?',
            status: 'sent'
            },
            {
            date: '28/03/2020 16:15:22',
            message: 'Ah scusa!',
            status: 'received'
            }
            ],
            },
            {
            name: 'Alessandro B.',
            avatar: '_4',
            visible: true,
            messages: [
            {
            date: '10/01/2020 15:30:55',
            message: 'Lo sai che ha aperto una nuova pizzeria?',
            status: 'sent'
            },
            {
            date: '10/01/2020 15:50:00',
            message: 'Si, ma preferirei andare al cinema',
            status: 'received'
            }
            ],
            
            },
            
          
           
            
        ],
         
        activeChat:0,
        newText:'',
        searchText:''
      }
  },
  created(){
      
  },
  methods:{
    changeChat(index){
      // console.log( index )
      this.activeChat = index
    },
    newMessage(){
      let data = new Date()
      let anno= data.getFullYear()
      let mese= data.getMonth() + 1
      let giorno= data.getDate()
      
      let ore = data.getHours()
      let min = data.getMinutes()
      let second = data.getSeconds()



      this.contacts[ this.activeChat].messages.push(
        {
          date: `${ore}/${min}/${second} ${giorno}/${mese}/${anno} ` ,
            message: this.newText ,
            status: 'sent'

        }

      )

      this.newText=''

        setTimeoout( () => {
          this.contacts[ this.activeChat].messages.push(
            {
              date: `${ore}/${min}/${second} ${giorno}/${mese}/${anno}` ,
                message: 'ok' ,
                status: 'received'
            }
          )
          
        },1000)

    } ,
    searchText(){
      this.contacts.forEach((element ) => {
        if(element.name.toLowerCase().includes( this.searchText.toLowerCase() ) ){
          element.visible= true
        } else {
          element.visible= false


        }
        
      })
    }
      

  }
}).mount('#app')
