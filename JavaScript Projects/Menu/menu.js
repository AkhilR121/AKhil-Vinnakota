// Total Breakfast Items - 8
// Total Lunck Items - 4
// Total Shakes Items - 4
// Total Dinner Items - 4

let allItems = [
    {
        id: 1,
        img: 'https://www.sbs.com.au/food/sites/sbs.com.au.food/files/styles/full/public/buttermilk-pancakes.jpg?itok=5bkvksj6',
        itemName: 'Buttuermilk Pancakes',
        Price: '₹300',
        description: 'That really is expensive just for the burger and fires with no drink.',
        category: 'Breakfast'
    },
    {
        id: 2,
        img: 'https://external-preview.redd.it/BPUoXoYC-g38awuOF4aBRZGJjQ_a3XA2fdb-xC-KJtE.jpg?width=640&crop=smart&auto=webp&s=b64c97eccd8ab2eb713e9cf2a1827d82549e8026',
        itemName: 'Burger King',
        Price: '₹450',
        description: 'Burger King with two chicken, one paneer and more spicy which serves one person',
        category: 'Breakfast'
    },
    {
        id: 3,
        img: 'https://img.freepik.com/premium-photo/idly-idli-south-indian-main-breakfast-item-which-is-beautifully-arranged-black-plate-white-background_527904-2893.jpg',
        itemName: 'Idly Sambar',
        Price: '₹30',
        description: 'Idly sambar which serves one person with unlimited sambar and chutney',
        category: 'Breakfast'
    },
    {
        id: 4,
        img: 'https://wallpaperaccess.com/full/6340452.jpg',
        itemName: 'Plain Dose',
        Price: '₹50',
        description: 'Sounth Indian style dose with cup of sambar which serves for one',
        category: 'Breakfast'
    },
    {
        id: 5,
        img: 'https://c4.wallpaperflare.com/wallpaper/702/596/19/food-omelette-wallpaper-preview.jpg',
        itemName: 'Bread Omelette',
        Price: '₹35',
        description: 'mumbai foods: Where pora met pav Mumbai is the birthplace of omelette sandwiches',
        category: 'Breakfast'
    },
    {
        id: 6,
        img: 'https://wallpapercave.com/wp/wp2053443.jpg',
        itemName: 'Sandwich',
        Price: '₹70',
        description: 'Grilled sandwich are a popular street food all over the world.',
        category: 'Breakfast'
    },
    {
        id: 7,
        img: 'https://img.freepik.com/premium-photo/vada-medu-vadai-with-sambar-chutney-popular-south-indian-snack-breakfast_466689-1590.jpg?w=2000',
        itemName: 'South Indian Vada',
        Price: '₹70/-',
        description: 'Vada or medu vadai with sambar and chutney. popular south indian snack or breakfast',
        category: 'Breakfast'
    },
    {
        id: 8,
        img: 'https://www.indianhealthyrecipes.com/wp-content/uploads/2020/12/poori-puri-recipe.jpg',
        itemName: 'Puri',
        Price: '₹30/-',
        description: 'Sounth India style puri having chole curry with a plate of two peices',
        category: 'Breakfast'
    },
    {
        id: 9,
        img: 'https://c4.wallpaperflare.com/wallpaper/869/719/717/cuisine-food-india-indian-wallpaper-preview.jpg',
        itemName: 'Andhra Meals',
        Price: '₹250/-',
        description: 'Andhra style full meals with six different curries with curd rice and ice-cream and serves two persons',
        category: 'Lunch'
    },
    {
        id: 10,
        img: 'https://wallpaperaccess.com/full/4622434.jpg',
        itemName: 'Chicken Biryani',
        Price: '₹350/-',
        description: 'Hyderabad chicken dum biryani with two chicken joints, one cup of curd, one cup of soup and, serves two persons',
        category: 'Lunch'
    },
    {
        id: 11,
        img: 'https://img.freepik.com/premium-photo/chicken-tikka-biryani-made-basmati-rice-cooked-with-masala-spices-served-with-yogurt-selective-focus_726363-37.jpg?w=2000',
        itemName: 'Chicken Tikka Biryani',
        Price: '₹390/-',
        description: 'Chicken Tikka biryani with chicken peices, one cup of curd, one cup of soup and, serves two persons',
        category: 'Lunch'
    },
    {
        id: 12,
        img: 'https://thumbs.dreamstime.com/b/homemade-fish-fry-coconut-oil-exotic-spices-herbs-kerala-recipe-indian-cuisine-healthy-tasty-seafood-fish-fry-152991204.jpg',
        itemName: 'Fisy Fry',
        Price: '₹315/-',
        description: 'South Indian style fish fry of two pieces which serves one',
        category: 'Lunch'
    },
    {
        id: 13,
        img: 'https://img.freepik.com/free-photo/raw-giant-shrimps-dark-table_1220-4998.jpg',
        itemName: 'Prawns Fry',
        Price: '₹310/-',
        description: 'South Indian style prawns fry which serves one',
        category: 'Dinner'
    },
    {
        id: 14,
        img: 'https://assets.epicurious.com/photos/62f16ed5fe4be95d5a460eed/1:1/w_2560%2Cc_limit/RoastChicken_RECIPE_080420_37993.jpg',
        itemName: 'Grilled Chicken',
        Price: '₹211/-',
        description: 'Grilled Chicken serves four persons',
        category: 'Dinner'
    },
    {
        id: 15,
        img: 'https://wallpapercave.com/wp/wp7485007.jpg',
        itemName: 'Parota',
        Price: '₹30/-',
        description: 'Parota having three peices with a cup of soup',
        category: 'Dinner'
    },
    {
        id: 16,
        img: 'https://thumbs.dreamstime.com/b/curd-rice-south-indian-yogurt-rice-mixed-seasoning-served-pickle-38489971.jpg',
        itemName: 'Curd Rice',
        Price: '₹55/-',
        description: 'Bowl of curd rice serces two',
        category: 'Dinner'
    },

    // Shakes
    {
        id: 17,
        img: 'https://thumbs.dreamstime.com/b/vanilla-milkshake-chocolate-cookies-black-straw-beverage-concept-92403820.jpg',
        itemName: 'Vanilla Milk Shake',
        Price: '₹160/-',
        description: 'Vanilla flavoured milk shake with a different dry fruits and oreo biscuit',
        category: 'Shakes'
    },
    {
        id: 18,
        img: 'https://img.freepik.com/premium-photo/pink-strawberry-freakshake-with-marshmallow-sweets_188078-15978.jpg?w=2000',
        itemName: 'Strawberry marshallow',
        Price: '₹255/-',
        description: 'Strawberry marshallow flavoured milk shake with a different dry fruits.',
        category: 'Shakes'
    },
    {
        id: 19,
        img: 'https://goodiegodmother.com/wp-content/uploads/2016/04/chocolate-vanilla-strawberry-milkshake-recipe-1024x819.jpg',
        itemName: 'Neapolitan',
        Price: '₹160/-',
        description: 'Neapolitan milk shake with a different dry fruits.',
        category: 'Shakes'
    },
    {
        id: 20,
        img: 'https://lh3.ggpht.com/FEu-BJ2DXU_z4zSb_i8FCgVfxwJbprCHOTpdlcqO84gQci6_YyWj071rXrwzHhoJSZ8-X13lHs1j12OzAYO0QcM=w1280-h720-c-rj-v1-e365',
        itemName: 'Triple nut caramel',
        Price: '₹160/-',
        description: 'Triple nut caramel milk shake with a different dry fruits.',
        category: 'Shakes'
    },
 
]

// Fetching Id and elements elements
let itemImg = document.getElementById('itemImage')
let items = document.querySelector('.items')

// Fetching Buttons
let allItemsBtn = document.getElementById('buttonAll')
let buttonBF = document.getElementById('buttonBF')
let buttonLunch = document.getElementById('buttonLunch')
let buttonShakes = document.getElementById('buttonShakes')
let buttonDinner = document.getElementById('buttonDinner')


window.addEventListener('DOMContentLoaded', () => {
    getAllItems(allItems)
    ItemsAvailable()
})

//By default all items will display
let getAllItems = (AllMenuItems) => {
    let displayMenu = AllMenuItems.map(function (item) {
        return `<div class="item1">
             <div class="img mx-2">
                 <img src=${item.img} id="itemImage" class="itemImage" alt="">
             </div>
             <div class="text">
                 <div class="headers">
                     <p id="description">${item.itemName}</p>
                     <p id="price" style="color: brown;">${item.Price}</p>
                 </div>
                 
                 <p class="desc">
                     ${item.description}
                 </p>
             </div>
         </div>`         
     })
     displayMenu = displayMenu.join("")
     items.innerHTML = displayMenu
}

let allButton = () => {
    allItemsBtn.addEventListener('click', () => {
        getAllItems(allItems)
    })
}

let BFItems = (allItems) => {
    buttonBF.addEventListener('click', () => {
        let displayMenu = allItems.map((item) => {
            if(item.category == 'Breakfast') {
                return `<div class="item1">
                <div class="img mx-2">
                    <img src="${item.img}" id="itemImage" class="itemImage" alt="">
                </div>
                <div class="text">
                    <div class="headers">
                        <p id="description">${item.itemName}</p>
                        <p id="price" style="color: brown;">${item.Price}</p>
                    </div>
                    
                    <p class="desc">
                        ${item.description}
                    </p>
                </div>
            </div>`
            }
        })
        displayMenu = displayMenu.join("")
        items.innerHTML = displayMenu  
    })
}

let LunchItems = (allItems) => {
    buttonLunch.addEventListener('click', () => {
        let displayMenu = allItems.map((item) => {
            if(item.category == 'Lunch') {
                return `<div class="item1">
                <div class="img mx-2">
                    <img src="${item.img}" id="itemImage" class="itemImage" alt="">
                </div>
                <div class="text">
                    <div class="headers">
                        <p id="description">${item.itemName}</p>
                        <p id="price" style="color: brown;">${item.Price}</p>
                    </div>
                    
                    <p class="desc">
                        ${item.description}
                    </p>
                </div>
            </div>`
            }
        })
        displayMenu = displayMenu.join("")
        items.innerHTML = displayMenu  
    })
}

let milkShakeItems = (allItems) => {
    buttonShakes.addEventListener('click', () => {
        let displayMenu = allItems.map((item) => {
            if(item.category == 'Shakes') {
                return `<div class="item1">
                <div class="img mx-2">
                    <img src="${item.img}" id="itemImage" class="itemImage" alt="">
                </div>
                <div class="text">
                    <div class="headers">
                        <p id="description">${item.itemName}</p>
                        <p id="price" style="color: brown;">${item.Price}</p>
                    </div>
                    
                    <p class="desc">
                        ${item.description}
                    </p>
                </div>
            </div>`
            }
        })
        displayMenu = displayMenu.join("")
        items.innerHTML = displayMenu  
    })
}


let dinnerItems = () => {
    buttonDinner.addEventListener('click', () => {
        let displayMenu = allItems.map((item) => {
            if(item.category == 'Dinner') {
                return `<div class="item1">
                <div class="img mx-2">
                    <img src="${item.img}" id="itemImage" class="itemImage" alt="">
                </div>
                <div class="text">
                    <div class="headers">
                        <p id="description">${item.itemName}</p>
                        <p id="price" style="color: brown;">${item.Price}</p>
                    </div>
                    
                    <p class="desc">
                        ${item.description}
                    </p>
                </div>
            </div>`
            }
        })
        displayMenu = displayMenu.join("")
        items.innerHTML = displayMenu  
    })
}

let ItemsAvailable = () => {
    allButton()
    BFItems(allItems)
    LunchItems(allItems)
    milkShakeItems(allItems)
    dinnerItems(allItems)
}