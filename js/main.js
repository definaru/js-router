let menu = [
    {
        name: 'About',
        link: '#about'
    },
    {
        name: 'Service',
        link: '#service'
    },
    {
        name: 'Catalog',
        link: '#catalog'
    },
    {
        name: 'Contact',
        link: '#contact'
    }
];

let catalog = [
    {
        image: 'https://cdn-icons-png.flaticon.com/512/6295/6295615.png',
        header: 'Header 1',
        text: 'thie is text'
    },
    {
        image: 'https://cdn-icons-png.flaticon.com/512/6295/6295615.png',
        header: 'Header 2',
        text: 'thie is text'
    },
    {
        image: 'https://cdn-icons-png.flaticon.com/512/6295/6295615.png',
        header: 'Header 3',
        text: 'thie is text'
    },
    {
        image: 'https://cdn-icons-png.flaticon.com/512/6295/6295615.png',
        header: 'Header 4',
        text: 'thie is text'
    },
    {
        image: 'https://cdn-icons-png.flaticon.com/512/6295/6295615.png',
        header: 'Header 5',
        text: 'thie is text'
    },
    {
        image: 'https://cdn-icons-png.flaticon.com/512/6295/6295615.png',
        header: 'Header 6',
        text: 'thie is text'
    },
];

const date = new Date().getFullYear();

const app = document.getElementById("start");
const wrapper = document.createElement('header');
const ul = document.getElementsByTagName("ul")[0];
const container = document.createElement('div');
let page = document.getElementById("page");

container.classList.add('container');
container.innerHTML = `
    <a href="/" id="logo">Logo</a>
    <div><ul class="menu"></ul></div>
    <div>
        <button class="login">Sign in</button>
        <button class="registration">Sign Up</button>
    </div>
`;


app.prepend(container);
app.insertAdjacentHTML('beforeEnd', '<div id="page"></div>');
app.insertAdjacentHTML('beforeEnd', `<footer><div>&copy; ${date} All right Recerved</div></footer>`);
document.querySelector('footer div').classList.add('container');

let el = document.querySelector('.container');
el.parentNode.insertBefore(wrapper, el);
wrapper.appendChild(el);



el.onclick = function(event) {
    
    if (event.target.nodeName != 'a') return;
  
    let href = event.target.getAttribute('href');
    href.preventDefault();
    console.log( href );
  
    return false;
};

let title = 'Home';
let data = `
    <div class="container" style="height:450px;">
        <h2>De Finibus Bonorum et Malorum</h2>
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, 
        totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta 
        sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia 
        consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, 
        qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi 
        tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
    </div>
`;

document.title = title;
document.getElementById('page').innerHTML = data;

const servicePage = `
<div class="flex">
    <div class="card">
        <img src="https://cdn-icons.flaticon.com/png/512/3631/premium/3631163.png?token=exp=1641986312~hmac=1a4bb60c00ee24bf3dd05740df5c7d54" style="width:180px;" alt="s" />
        <h4>Title 1</h4>
    </div>
    <div class="card">
        <img src="https://cdn-icons.flaticon.com/png/512/3631/premium/3631079.png?token=exp=1641986339~hmac=f51bec4d1cf97c94b361208d93cad825" style="width:180px;" alt="s" />
        <h4>Title 2</h4>
    </div>
    <div class="card">
        <img src="https://cdn-icons.flaticon.com/png/512/3631/premium/3631127.png?token=exp=1641986346~hmac=d1838d288c2894ae717e14438ba12a6b" style="width:180px;" alt="s" />
        <h4>Title 3</h4>
    </div>
</div>
`;

const About = () => {
    document.title = 'About';
    document.getElementById('page').innerHTML = `
    <div class="container animate__animated animate__backInLeft">
        <h2>About</h2>
        <img src="https://bestprogrammer.ru/wp-content/uploads/2020/08/JavaScript-1.jpg" style="height: 300px" alt="About" />
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, 
        totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta 
        sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia 
        consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, 
        qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi 
        tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
    </div>
    `;
}

const Service = () => {
    document.title = 'Service';
    document.getElementById('page').innerHTML = `
    <div class="container animate__animated animate__slideInLeft">
        <h2>Service</h2>
        <p>Neque porro quisquam est, 
        qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi 
        tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. 
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, 
        totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta 
        sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia 
        consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
        ${servicePage}
    </div>
    `;
}

const Catalog = () => {
    document.title = 'Catalog';
    document.getElementById('page').innerHTML = `
    <div class="container animate__animated animate__slideInLeft">
        <h2>Catalog</h2>
        <p>Neque porro quisquam est, 
        qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi 
        tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. 
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, 
        totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta 
        sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia 
        consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
        <div id="catalog" class="flex animate__animated animate__slideInUp"></div>
    </div>
    `;

    catalog.forEach(function(items, i, arr) {
        document.querySelector("#catalog").innerHTML += `
        <div class="card">
            <img src="${items.image}" style="width:180px;" alt="s" />
            <h4>${items.header}</h4>
            <p>${items.text}</p>
        </div>
        `;
    });
}

const Contact = () => {
    document.title = 'Contact';
    document.getElementById('page').innerHTML = `
    <div class="container animate__animated animate__slideInLeft">
        <h2>Contact</h2>
        <p>Neque porro quisquam est, 
        qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi 
        tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. 
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, 
        totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta 
        sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia 
        consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
        <div class="animate__animated animate__slideInUp">
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d7482426.046305101!2d79.37636942172738!3d23.692819480529195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2sru!4v1641989374135!5m2!1sru!2sru" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
        </div>
    </div>
    `;
}

document.querySelector('.menu').onclick = function(event) {
    let active = event.target.getAttribute('href');
    let href = window.location.hash;
    document.querySelectorAll(`a[href$="${active}"]`)[0].classList.toggle("active");
    document.querySelectorAll(`a[href$="${href}"]`)[0].classList.remove("active");
};

let link = '';

window.addEventListener('hashchange', function(e) {
    e.preventDefault();
    link = window.location.hash;
  
    switch (link) { 
        case '#about':
            About();
            break;
        case '#service':
            Service();
            break;
        case '#catalog':
            Catalog();
            break;
        case '#contact':
            Contact();
            break;
        default:
            console.log('Home');
    }    
});


let list = document.querySelector('ul');
menu.forEach(function(item, i, arr) {
    list.innerHTML += `
        <li>
            <a id="${i}" href="${item.link}" class="link">
                ${item.name}
            </a>
        </li>`;
});