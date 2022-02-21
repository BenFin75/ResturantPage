import './style.css';
import headerpng from './img/header.png';
import logo from './img/logo.png';
import iconimg from './img/icon.png';
import welcome from './img/welcome.png';
import baguette from './img/baguettes.jpeg';
import focaccia from './img/focaccia.png';
import pizza from './img/pizza.png';
import bread from './img/bread.jpg';
import cheesecake from './img/cheesecake.png';
import cookie from './img/cookie.jpg';
import cake from './img/cake.jpg';

const header = (() => {


    const drawHeader = (content) => {
        const headerDiv = document.createElement('header');
        const background = document.createElement('div');
        background.className = "background";
        const headerImg = document.createElement('img');
        headerImg.className = 'headerimg';
        headerImg.src = headerpng;

        const logoContainer = document.createElement('div');
        const headerLogo = document.createElement('img');
        headerLogo.className = 'headerlogo';
        headerLogo.src = logo;
        logoContainer.appendChild(headerLogo);

        headerDiv.appendChild(background);
        headerDiv.appendChild(headerImg);
        headerDiv.appendChild(logoContainer);

        content.appendChild(headerDiv);
    }

    const drawNav = (content) => {
        const nav = document.createElement('div');
        nav.className = 'nav';
        
        const left = document.createElement('div');
        left.className = 'left';

        const home = document.createElement('div');
        home.classList.add('navbtn', 'home');
        home.textContent = "Home";
        const confections = document.createElement('div');
        confections.classList.add('navbtn', 'confections');
        confections.textContent = "Confections";

        left.appendChild(home);
        left.appendChild(confections);

        const right = document.createElement('div');
        right.className = 'right';

        const bread = document.createElement('div');
        bread.classList.add('navbtn', 'baked');
        bread.textContent = "Bread";
        const about = document.createElement('div');
        about.classList.add('navbtn', 'about');
        about.textContent = "About";

        right.appendChild(bread);
        right.appendChild(about);

        nav.appendChild(left);
        nav.appendChild(right);

        content.appendChild(nav);
    }
    
    const draw = (content) => {
        drawHeader(content);
        drawNav(content);
    }

    return {draw};
})();

const home = (() => {
    const homeDiv = document.createElement('div');
    homeDiv.className = 'home';
    const welcomeImg = document.createElement('img');
    welcomeImg.src = welcome;
    homeDiv.appendChild(welcomeImg);

    const draw = (main) => {
        main.appendChild(homeDiv);
    }

    return {draw};
})();

const gallery = (() => {
    const imgs = {
                    'Baguettes': baguette, 
                    'Cheese Cake' : cheesecake, 
                    'Focaccia' : focaccia, 
                    'Neapolitan Pizza' : pizza,
                    'Sourdough Bread' : bread,
                    'Cake' : cake,
                    'Cookies' : cookie,
                };
    

    const listItem = (name) => {
        const title = document.createElement('h2');
        title.textContent = name;

        const img = document.createElement('img');
        img.src = imgs[name];
        const li = document.createElement('li');
        li.appendChild(img);
        li.appendChild(title);
        return li;
    };

    const confection = (main) => {
        const confectionDiv = document.createElement('div');
        confectionDiv.className = 'confections';
        const list = document.createElement('ul');

        list.appendChild(listItem('Cheese Cake'));
        list.appendChild(listItem('Cake'));
        list.appendChild(listItem('Cookies'));
        confectionDiv.appendChild(list);

        main.appendChild(confectionDiv);
    };

    const bake = (main) => {
        const bakesDiv = document.createElement('div');
        bakesDiv.className = 'bakes';
        const list = document.createElement('ul');

        list.appendChild(listItem('Baguettes'));
        list.appendChild(listItem('Focaccia'));
        list.appendChild(listItem('Neapolitan Pizza'));
        list.appendChild(listItem('Sourdough Bread'));
        bakesDiv.appendChild(list);

        main.appendChild(bakesDiv);
    }; 

    return {confection, bake};
})();

const about = (() => {
    const aboutDiv = document.createElement('div');
    aboutDiv.className = 'about';

    const whoDiv = document.createElement('div');
    whoDiv.className = 'who';
    const whoHeader = document.createElement('h2');
    whoHeader.textContent = 'Who are We?';
    const whoP = document.createElement('p');
    whoP.innerHTML = "Ben's Bakery is a bakery that I made up." + '<br />' + "The rest, as they say, is history!";
    whoDiv.appendChild(whoHeader);
    whoDiv.appendChild(whoP);

    const visitDiv = document.createElement('div');
    visitDiv.className = 'visit';

    const blurbDiv = document.createElement('div');
    blurbDiv.className = 'blurb';
    const visitHeader = document.createElement('h2');
    visitHeader.textContent = 'Visit Us!';
    const msgDiv = document.createElement('div');
    msgDiv.className = 'message';
    const msgP = document.createElement('p');
    msgP.textContent = 'Stop by any time and see the shop!';
    const addressP = document.createElement('p');
    addressP.textContent = '123 Madeup Rd, City, State';
    msgDiv.appendChild(msgP);
    msgDiv.appendChild(addressP);
    blurbDiv.appendChild(visitHeader);
    blurbDiv.appendChild(msgDiv);

    const mapDiv = document.createElement('div');
    mapDiv.className = 'map';
    mapDiv.innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28123.526097890393!2d-31.21409877854675!3d39.43461560067281!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x85ecf648fffdd65a!2sMiradouro%20Lagoa%20Negra%20e%20Lagoa%20Comprida!5e0!3m2!1sen!2sus!4v1644879887115!5m2!1sen!2sus" style="border:0;" allowfullscreen="" loading="lazy"></iframe>';

    visitDiv.appendChild(blurbDiv);
    visitDiv.appendChild(mapDiv);

    aboutDiv.appendChild(whoDiv);
    aboutDiv.appendChild(visitDiv);

    const draw = (main) => {
        main.appendChild(aboutDiv);
    }

    return {draw};
})();

const footer = (() => {
    const footer = document.createElement('footer')
    const github = document.createElement('a')
    github.href = "githubhttps://.com/BenFin75";
    github.target = "_blank";
    github.textContent = 'Ben Finley';
    const footerText = document.createElement('p');
    footerText.innerHTML = 'Created by ' + github.outerHTML + ' © 2022';
    footer.appendChild(footerText);

    const draw = (main) => {
        main.appendChild(footer);
    }

    return {draw};
})();

const displayHandler = (() => {
    const head = document.querySelector('head');
    const content = document.querySelector('#content');
    const mainDiv = document.createElement('main');
    const icon = document.createElement('link');
    icon.rel = 'icon';
    icon.href = iconimg;

    const change = (e) => {
        mainDiv.innerHTML = '';
        switch (e.target.textContent) {
            case 'Home':
                home.draw(mainDiv);
                break;
            case 'Confections':
                gallery.confection(mainDiv);
                break;
            case 'Bread':
                gallery.bake(mainDiv);
                break;
            case 'About':
                about.draw(mainDiv);
                break;
        }

    }

    const activateButtons = () => {
        const btns = document.querySelectorAll('.navbtn');
        btns.forEach(button => {
            button.addEventListener('click', change)
        })
    }

    const init = () => {
        head.appendChild(icon);
        header.draw(content);
        content.appendChild(mainDiv);
        home.draw(mainDiv);
        footer.draw(content);
        activateButtons();
    }

    return {init};
})();

displayHandler.init();