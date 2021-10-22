var pos = 0;
    const pacArray = [
        ['PacMan1.png', 'PacMan2.png'],
        ['PacMan3.png', 'PacMan4.png']
    ];
    var direction = 0;
    const pacMen = []; // This array holds all the pacmen

    function setToRandom(scaleX, scaleY) {
        return {
            x: Math.random() * scaleX,
            y: Math.random() * scaleY
        }
    }
    // Factory to make a PacMan at a random position with random velocity
    function makePac() {
        // select a random pacMan img
        let pacNum = (Math.random() * 4) + 1;
        pacNum = Math.floor(pacNum);
        console.log(pacNum);

        // returns an object with random values scaled {x: 33, y: 21}
        let velocity = setToRandom(10, 10); // {x:?, y:?}

        
        // Add image to div id = game
        let game = document.getElementById('game');
        let newimg = document.createElement('img');
        newimg.style.position = 'absolute';
        newimg.width = 100;
        newimg.height = 100;

        let position = setToRandom(window.innerWidth - newimg.width, window.innerHeight - newimg.height);
        // select a random pacMan img **edited image path**
        newimg.src = `/dylansicardportfolio/projects/pacmen-exercise/images/PacMan${pacNum}.png`;
    
        
        
        // set position
        console.log('position: ')
        console.log(position)
        newimg.style.left = `${position.x}px`;
        newimg.style.top = `${position.y}px`;



        // add new Child image to game
        game.appendChild(newimg);
        // return details in an object
        return {
            position,
            velocity,
            newimg
        }
    }

    function update() {
        //loop over pacmen array and move each one and move image in DOM
        pacMen.forEach((item) => {
            checkCollisions(item)
            item.position.x += item.velocity.x;
            item.position.y += item.velocity.y;

            item.newimg.style.left = `${item.position.x}px`;
            item.newimg.style.top = `${item.position.y}px`

            // TODO: loop through pacman array, change pac man each iteration
            // let changePac = () {
            //   item.
            // }
        })
        setTimeout(update, 20);
    }

    function checkCollisions(item) {
        if (item.position.x + item.velocity.x + item.newimg.width > window.innerWidth || item.position.x + item.velocity.x < 0) {
          item.velocity.x = -item.velocity.x
        }

        if (item.position.y + item.velocity.y + item.newimg.height > window.innerHeight || item.position.y + item.velocity.y < 0) {
          item.velocity.y = -item.velocity.y
        }
    }

    function makeOne() {
        pacMen.push(makePac()); // add a new PacMan
    }