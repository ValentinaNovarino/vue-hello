var app = new Vue(
    {
        el: '#root',
        data: {
            // stampo a schermo un messaggio
            messagge: 'Buona Serata!',
            // BONUS stampo a schermo un immagine
            imageUrl: 'https://img.freepik.com/free-vector/space-background-with-abstract-shape-stars_189033-30.jpg?size=626&ext=jpg',
            filterImg: 'normal-img'
        },
        methods: {
            changeFilter() {
                if (this.filterImg == 'normal-img') {
                    this.filterImg = 'filtered-img';
                } else {
                    this.filterImg = 'normal-img';
                }
            }
        }
    }

);
