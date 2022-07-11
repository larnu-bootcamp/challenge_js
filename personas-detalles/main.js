const skills = [
  ['<i class="fa-brands fa-js btn__icon"></i>', "Js"],
  ['<i class="fa-brands fa-css3 btn__icon"></i>', "Css"],
  ['<i class="fa-brands fa-html5 btn__icon"></i>', "Html"],
  ['<i class="fa-brands fa-python btn__icon"></i>', "Python"],
  ['<i class="fa-solid fa-server btn__icon"></i>', "Backend"],
  ['<i class="fa-solid fa-database btn__icon"></i>', "Mongodb"],
  ['<i class="fa-solid fa-laptop-code btn__icon"></i>', "Hacking"],
  ['<i class="fa-brands fa-react btn__icon"></i>', "React"],
  ['<i class="fa-brands fa-java btn__icon"></i>', "Java"],
  ['<i class="fa-solid fa-function btn__icon"></i>', "D. Science"],
  ['<i class="fa-solid fa-robot btn__icon"></i>', "M. learning"],
  ['<i class="fa-brands fa-figma btn__icon"></i>', "UI-UX"],
];

/**
 *
 * @param {Array} arr
 */
function randomNumbers(arr) {
  return Math.floor(Math.random() * arr.length);
}

/**
 * @typedef User
 *  @property {String} name
 *  @property {String} picture
 *  @property {String} email
 */

/**
 *
 * @param {User} user
 */
function createUser(user) {
  const card = document.querySelector(".card");
  const mySet = new Set();

  for (let i = 0; i < 5; i++) {
    const number = randomNumbers(skills);
    mySet.add(number);
  }

  const buttons = () => {
    const randomSkills = Array.from(mySet);

    return randomSkills
      .map((skill) => {
        return `
        <button class="btn" type="button">
          ${skills[skill][0]}
          ${skills[skill][1]}
        </button>
      `;
      })
      .join("");
  };

  const userHtml = `
    <div class="card__head">
      <figure class="avatar-container">
        <img
          class="avatar"
          src="${user.picture}"
          alt="image"
        />
      </figure>
      <h1 class="heading">
        <span>
          Name <span class="heading--main"> ${user.name} </span>
        </span>
        <span>
          Email <span class="heading--subtitle"> ${user.email} </span>
        </span>
      </h1>
    </div>

    <article>
      <h4>Hobbies</h4>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Reiciendis, et pariatur deleniti cupiditate harum odio voluptate
        magnam ab modi sunt inventore numquam vitae quod necessitatibus
      </p>
    </article>

    <div class="buttons-box">
      <h4>Skills</h4>

      <div class="skills-container">
      ${buttons()}
      </div>
    </div>
  `;

  card?.insertAdjacentHTML("afterbegin", userHtml);
}

fetch("https://randomuser.me/api/")
  .then((res) => {
    return res.json();
  })
  .then((res) => {
    const payload = res?.results[0];
    const { first, last } = payload.name;

    let { email } = payload;
    const { large, medium, thumbnail } = payload.picture;

    createUser({
      name: `${first} ${last}`,
      email: email,
      picture: large || medium || thumbnail || "",
    });
  });
//Grupo Estuardo, Cesar, Roberto