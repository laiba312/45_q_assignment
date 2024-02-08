let guest_list4: string[] = ['zaheer', 'aroosa', 'laiba', 'fatima'];
guest_list4.splice(0, 1);
guest_list4.splice(1, 0, 'meryam');
guest_list4.forEach((gust) => {
  console.log(`people that you found a bigger dinner table. ${gust}`);
});
// • Add one new guest to the beginning of your array.
guest_list4.splice(0, 0, 'noor');
console.log(guest_list4);
//• Add one new guest to the middle of your array. • Use append() to add one
// new guest to the end of your list. • Print a new set of invitation messages,
//  one for each person in your list.
console.log(guest_list4.length);
guest_list4.splice(3, 0, 'sara');
console.log(guest_list4);
guest_list4.splice(7, 0, 'ali');
console.log(guest_list4);
guest_list4.forEach((gust) => {
  console.log(`hello found a bigger dinner table. ${gust}`);
});
// • Start with your program from Exercise 16. Add a new line that prints a message
// saying that you can invite only two people for dinner.
