const { green, red } = require('chalk');
const {db, Customer, Store} = require('./server/db/moduel/index')


const Customers = [
    {
        firstName: 'mati',
        lastName: 'dejene',
        email:"sintayehu1993@gmail.com",
        userName: 'mati1993',
        password:'ethiopia111',
        DOB:18,
        totalAmount: 0
    },
    {
        firstName: 'samuel',
        lastName: 'dejene',
        email:"samuelDejene@gmail.com",
        userName: 'samuel993',
        password:'ethiopia111',
        totalAmount: 0
    }
]

const Stores = [{
    name: 'target',
    imageUrl: 'https://cms-assets.tutsplus.com/uploads/users/988/posts/29368/image/target-audience-a.jpg',
    nameOfACard: {
        cardName:'I Love Target',
        price: 50,
        imageUrlOfCard:'https://productimages.nimbledeals.com/gift_card_skin/886a74f0a8f86040de6d24b942aad6_1586474556629'
    },
    name: "macy's",
    imageUrl: 'https://cdn.mos.cms.futurecdn.net/kPTwCmCKYJUwGbDbRZr9MX.png',
    nameOfACard: {
        cardName:"shop At macy's",
        price: 100,
        imageUrlOfCard:'https://www.shopmyexchange.com/products/images/xlarge/6060613_0000.jpg'
    }
}]


const seed = async () => {
    try {
      await db.sync({ force: true });
  
      await Promise.all(
        Customers.map((customer) => {
          return Customer.create(customer);
        })
      );
  
      await Promise.all(
        Stores.map((store) => {
          return Store.create(store);
        })
      );
  
      console.log(green("Seeding success!"));
      db.close();
    } catch (err) {
      seed().catch((err) => {
        console.error(red("Oh noes! Something went wrong!"));
        console.error(err);
        db.close();
      });
    }
  };
  seed();
  
  module.exports = seed;

  if (require.main === module) {
    seed()
      .then(() => {
        console.log(green('Seeding success!'));
        db.close();
      })
      .catch((err) => {
        console.error(red('Oh noes! Something went wrong!'));
        console.error(err);
        db.close();
      });
  }
