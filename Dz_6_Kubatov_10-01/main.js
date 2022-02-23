const obj = {
    firstName: 'Temirlan',
    lastName: 'Kubatov',
    was_born: '01.06.03',
    password: '123',
};

function getFullName(firstName, lastName) {
    return obj.fullName = `${firstName} ${lastName}`;
}

getFullName(obj.firstName, obj.lastName);

console.log('', obj);
