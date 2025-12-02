const cardNameInput = document.getElementById('cardNameInput');
const cardNameH2 = document.getElementById('cardNameH2');
const cardTypeH3 = document.getElementById('cardTypeH3');
const card = document.getElementById('card');

const catNames = [
    "Luna", "Milo", "Oliver", "Leo", "Loki", "Bella", "Charlie", "Willow", "Lucy", "Simba",
    "Chloe", "Max", "Nala", "Lily", "Sophie", "Rocky", "Zoe", "Cleo", "Patch", "Coco",
    "Oreo", "Tiger", "Daisy", "Jasper", "Gizmo", "Smokey", "Felix", "Socks", "Ginger", "Shadow",
    "Misty", "Sasha", "Buddy", "Oscar", "Ruby", "Pepper", "Peanut", "Molly", "Sam", "Bear",
    "Ziggy", "Mittens", "Bailey", "Pumpkin", "Boo", "Hazel", "Garfield", "Whiskers", "Callie", "Kiki",
    "Mocha", "Salem", "Binx", "Ash", "Midnight", "Angel", "Buster", "Chester", "Missy", "Zeus",
    "Thor", "Apollo", "Artemis", "Athena", "Mochi", "Sushi", "Bean", "Olive", "Toby", "George",
    "Rusty", "Scooter", "Gus", "Louie", "Frankie", "Murphy", "Otis", "Teddy", "Bandit", "Romeo",
    "Casper", "Snickers", "Tigger", "Princess", "Lulu", "Marley", "Rex", "Sunny", "Penny", "Stormy",
    "Blue", "Copper", "Finn", "Jack", "Mac", "Prince", "Sammy", "Simon", "Walter", "Yoda"
];

const monsterNames = [
    "Gorgon", "Kraken", "Hydra", "Chimera", "Basilisk", "Wendigo", "Yeti", "Sasquatch", "Cyclops", "Minotaur",
    "Banshee", "Wraith", "Specter", "Ghoul", "Goblin", "Orc", "Troll", "Ogre", "Gremlin", "Imp",
    "Demon", "Behemoth", "Leviathan", "Titan", "Colossus", "Gargoyle", "Vampire", "Werewolf", "Zombie", "Mummy",
    "Lich", "Dracolich", "Wyvern", "Drake", "Dragon", "Phoenix", "Griffin", "Cerberus", "Siren", "Harpy",
    "Medusa", "Scylla", "Charybdis", "Grendel", "Cthulhu", "Nyarlathotep", "Azathoth", "Shoggoth", "Predator", "Xenomorph",
    "Demogorgon", "MindFlayer", "Beholder", "Owlbear", "RustMonster", "Slime", "Ooze", "Elemental", "Golem", "Construct",
    "Abomination", "Mutant", "Necromorph", "Clicker", "Bloater", "Hag", "Warlock", "Dreadlord", "Balrog", "Sauron",
    "Voldemort", "Thanos", "Galactus", "Doomsday", "Darkseid", "Venom", "Carnage", "Bowser", "Ganondorf", "Diablo",
    "Baal", "Mephisto", "Azmodan", "Duriel", "Andariel", "Ragnaros", "Onyxia", "Nefarian", "Deathwing", "Arthas",
    "Illidan", "Sylvanas", "KelThuzad", "Anubarak", "Malganis", "Tichondrius", "Mannoroth", "Magtheridon", "Gruul", "KogMaw"
];

const robotNames = [
    "R2-D2", "C-3PO", "BB-8", "Wall-E", "Eve", "Optimus", "Bumblebee", "Megatron", "Starscream", "Soundwave",
    "Grimlock", "Terminator", "RoboCop", "Data", "Lore", "Bender", "Flexo", "Calculon", "Clamps", "HAL-9000",
    "K-9", "Dalek", "Cyberman", "Marvin", "DeepThought", "GLaDOS", "Wheatley", "Turret", "Atlas", "P-Body",
    "Bastion", "Zenyatta", "Orisa", "Ramattra", "Echo", "Iggy", "Scrap", "Bolt", "Nut", "Gear",
    "Cog", "Sprocket", "Ratchet", "Clank", "Rivets", "Sparky", "Wires", "Circuit", "Chip", "Byte",
    "Bit", "Pixel", "Glitch", "Bug", "Virus", "Trojan", "Bot", "Droid", "Drone", "Cyborg",
    "Android", "Replicant", "Synth", "Mech", "Gundam", "Eva", "Jaeger", "Titan", "Sentinel", "Guardian",
    "Defender", "Protector", "Enforcer", "Destroyer", "Annihilator", "Exterminator", "Vaporizer", "Crusher", "Smasher",
    "Unit-734", "X-900", "Z-1000", "Alpha", "Beta", "Omega", "Delta", "Sigma", "Zeta", "Prime",
    "Matrix", "Nexus", "Vortex", "Vector", "Quant", "Logic", "Mainframe", "Server", "Client", "Root"
];

let cardType = 'Robot';
let cardName = '';
let lifeIcon = '❤️';


function changeName() {
    cardName = cardNameInput.value;
    cardNameH2.innerHTML = cardName;
    changeImg()
}


function changeCardType(type) {
    cardType = type;
    // console.log(cardType)
    cardTypeH3.innerHTML = cardType;
    changeImg()
}

function getRandomName() {
    let array = robotNames;
    if (cardType === 'Cat') array = catNames;
    if (cardType === 'Monster') array = monsterNames;

    let randomNumber = Math.floor(Math.random() * array.length)
    // console.log(randomNumber)
    let randomName = array[randomNumber];
    // console.log(randomName)
    cardNameInput.value = randomName;
    changeName()
}


function changeStats(stat) {
    if (stat === 'att') {
        document.getElementById('attSpan').innerHTML =
            document.getElementById('attInput').value;
    } else {
        document.getElementById('defSpan').innerHTML =
            document.getElementById('defInput').value;
    }
}

function changeLife() {
    let cardLife = 3;
    cardLife = +document.getElementById('lifeInput').value;
    document.getElementById('lifeP').innerHTML = lifeIcon.repeat(cardLife);
}

function changeIcon(icon) {
    lifeIcon = icon;
    changeLife();
}


function changeFont(font) {
    card.style.fontFamily = font;
}


function changeBorderColor() {
    card.style.borderColor = document.getElementById('borderInput').value;
}
changeBorderColor()

function changeCardColor() {
    card.style.color = document.getElementById('colorInput').value;
}

changeCardColor()


function changeBG(cgClass) {
    card.classList = [];
    card.classList.add(cgClass);
}

changeBG('bg4')

function changeImg() {
    let set = 1;
    if (cardType === 'Monster') set = 2;
    if (cardType === 'Cat') set = 4;


    let imgSrc = `https://robohash.org/${cardName}.png?set=set${set}`;
    document.getElementById('cardImg').src = imgSrc;
}