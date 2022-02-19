let links, 
	list,
	title,
	pages,
	servicePage,
	updateState, 
	contentElement,
	navigatorElement,
	isActive;
		
let catalog = [
    {
        image: '/assets/img/abc1.jpg',
        header: 'Nulla',
        text: '$271'
    },
    {
        image: '/assets/img/abc2.jpg',
        header: 'Corporis',
        text: '$295'
    },
    {
        image: '/assets/img/abc3.jpg',
        header: 'Minus',
        text: '$280'
    },
    {
        image: '/assets/img/abc4.png',
        header: 'Similique',
        text: '$262'
    },
    {
        image: '/assets/img/abc5.jpg',
        header: 'Soluta',
        text: '$109'
    },
    {
        image: '/assets/img/abc6.jpg',
        header: 'Quos',
        text: '$247'
    },
];

contentElement = document.getElementById('app');
navigatorElement = document.querySelector('.nav');
pages = document.getElementById("page");

const date = new Date().getFullYear();
const container = document.createElement('div');
const wrapper = document.createElement('header');
const ul = document.getElementsByTagName("ul")[0];

contentElement.insertAdjacentHTML('beforeEnd', `<footer><div>&copy; ${date} All right Recerved</div></footer>`);
document.querySelector('footer div').classList.add('container');




pages.innerHTML = `
    <div class="container">
        <h2>De Finibus Bonorum et Malorum</h2>
        <img src="/assets/img/resize.jpg" class="hero" alt="Hero" />
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, 
        totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta 
        sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia 
        consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, 
        qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi 
        tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
    </div>
`;



const About = () => {
    
    return `
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
    
    return `
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

    let result = '';
    for (let items in catalog) {
        result += `
            <div class="card">
                <img src="${catalog[items].image}" style="width:100%;" alt="s" />
                <h4>${catalog[items].header}</h4>
                <p>${catalog[items].text}</p>
            </div>
        `;
    }
    return `
    <div class="container animate__animated animate__slideInLeft">
        <h2>Catalog</h2>
        <p>Neque porro quisquam est, 
        qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi 
        tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. 
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, 
        totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta 
        sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia 
        consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
        <div id="catalog" class="flex animate__animated animate__slideInUp">
		${result}
		</div>
    </div>
    `;
}

const Contact = () => {
    
    return `
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



servicePage = `
<div class="flex">
    <div class="card">
        <img src="/assets/img/1.png" style="width:180px;" alt="s" />
        <h4>Title 1</h4>
    </div>
    <div class="card">
        <img src="/assets/img/2.png" style="width:180px;" alt="s" />
        <h4>Title 2</h4>
    </div>
    <div class="card">
        <img src="/assets/img/3.png" style="width:180px;" alt="s" />
        <h4>Title 3</h4>
    </div>
</div>
`;

links = {
	about: About(),
	service: Service(),
	catalog: Catalog(),
    contact: Contact()
};

title = {
    about: 'О нас',
	service: 'Услуги',
	catalog: 'Каталог',
    contact: 'Контакты'
}

updateState = (state) => {
	if(!state) return;
	pages.innerHTML = links[state.page];
	document.title = title[state.page];
	isActive(state);
};

isActive = (state) => {
	[].slice.call(navigatorElement.querySelectorAll('.nav li a.link'))
		.forEach((e) => {
			let classList = e.parentNode.classList;
			state.page === e.getAttribute('href')
				? classList.add('active')
				: classList.remove('active');
		});
};

window.addEventListener('popstate', function(e) {
	updateState(e.state);
});

window.addEventListener('load', function(e) {
	updateState(e.state);
});

navigatorElement.addEventListener('click', function(e) {
	let state;
	let title = 'Home';
	if(e.target.tagName !== 'A') return;
	state = {
		page: e.target.getAttribute('href'),
		title: title
	};
	
	history.pushState(state, state.title, state.page);
	updateState(state);
	console.table(state, state.title, state.page);
	e.preventDefault();
});