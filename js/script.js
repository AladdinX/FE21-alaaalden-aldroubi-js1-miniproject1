const body = document.querySelector('body');
for (let i = 0; i < 5; i++) {
  const h1 = document.createElement('h1');
  h1.innerText = `Rad ${i + 1}`;
  body.appendChild(h1);
  h1.style.textAlign = 'center';
  const size = 10 + (10 * i);
  h1.style.fontSize = `${size}px`;
  let hue = (168) + i * i;
  h1.style.backgroundColor = `hsl(${hue}, 100%, 64%)`;
  h1.style.color = '#8583eb';
}

const warper = document.createElement('div');
body.appendChild(warper);
warper.style.border = '2px solid black';
warper.style.display = 'flex';
warper.style.justifyContent = 'space-around';
warper.style.alignContent = 'center';


const ul1 = document.createElement('ul');
for (let i = 0; i < 10; i++) {
  const li = document.createElement('li');
  li.innerText = i;
  if (li.innerText % 2 == 1) {
    li.style.backgroundColor = 'white'
  } else if (li.innerText == 4) {
    li.style.backgroundColor = 'none';
    li.style.color ='white';
  } else {
    li.style.backgroundColor = 'black';
    li.style.color = 'white';
  }
  ul1.appendChild(li);
  ul1.style.listStyleType = 'none';
  ul1.style.backgroundColor = '#8583eb';
  ul1.style.border = '10px solid #8583eb';
  ul1.style.marginTop = '50px';
  ul1.style.marginBottom = '50px';
  ul1.style.width = '50px';
  ul1.style.textAlign = 'left';
  ul1.style.padding = '0px';
  warper.append(ul1)
}

const ul2 = document.createElement('ul');
for (let i = 9; i > -1; i--) {
  const li = document.createElement('li');
  li.innerText = i;
  ul2.appendChild(li);
  ul2.style.listStyle = 'none';
  ul2.style.backgroundColor = '#8583eb';
  ul2.style.margin = 'right';
  ul2.style.border = '2px solid #8583eb';
  if (li.innerText % 2 == 1) {
    li.style.backgroundColor = 'white';
  } else if (li.innerText == 8) {
    li.style.color = 'white';
    li.style.backgroundColor = 'none'
  } else {
    li.style.backgroundColor = 'black';
    li.style.color = 'white';
  }
  ul2.style.border = '10px solid #8583eb';
  ul2.style.marginTop = '50px';
  ul2.style.marginBottom = '50px';
  ul2.style.width = '50px';
  ul2.style.textAlign = 'center';
  ul2.style.padding = '0px';
  warper.append(ul2);
}

const ul3 = document.createElement('ul');
const numbers = ["Ett", "två", "tre", "fyra", "fem", "sex", "sju", "åtta", "nio", "tio"];
for (let i = 0; i < numbers.length; i++) {
  const li = document.createElement('li');
  li.innerText = numbers[i];
  if (li.innerText == "sex") {
    li.style.backgroundColor = 'none';
    li.style.color = 'white';
  } else if (i % 2 == 1) {
    li.style.backgroundColor = 'white'
  } else if (i % 2 == 0) {
    li.style.backgroundColor = 'black';
    li.style.color = 'white';
  }
  ul3.append(li);
  ul3.style.backgroundColor = '#8583eb';
  ul3.style.border = '10px solid #8583eb';
  ul3.style.marginTop = '50px';
  ul3.style.marginBottom = '50px';
  ul3.style.listStyle = 'none';
  ul3.style.width = '50px';
  ul3.style.textAlign = 'right';
  ul3.style.padding = '0px';
  warper.append(ul3);
}
