
new Vue({
    // we want to target the div with an id of 'events'
    el:'#events',
    // here we can register any values or collections that holds data
    // for the application
    data() {
        return {
            event: {name: '', description: '', date: ''},
            events:[]
        }
        
    },

    // Anytin within the ready function would run once the applications runs
    mounted() {
        this.fetchEvents();
    },

    // methods we like to use in our application are registered here
    methods: {
        fetchEvents: function() {
            this.events = [
                {
                    id: 1,
                    name: 'TIFF',
                    description: 'Toronto International film Festival',
                    date: '2017-09-10'
                },
                {
                    id: 2,
                    name: 'The Martian Premiere',
                    description: 'The Martian comes to theatres',
                    date: '2017-02-10'
                },
                {
                    id: 3,
                    name: 'SXSW',
                    description: 'Music, film and interactive festival',
                    date: '2017-05-10'
                }
            ];
            console.log('got here');
            //this.events = events;
        },

        // Add an event to the existing events array
        addEvent: function() {
            if(this.event.name) {
                this.events.push(this.event);
                this.event = {
                    name: '',
                    description: '',
                    date: ''
                }
            }
        },
        deleteEvent: function(event) {
            if(confirm("Are you sure you want to delete this event?")){
                this.events.slice(event);
            }
        }
    }
});