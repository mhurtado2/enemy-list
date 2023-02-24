// header of enemies list with dashes under check
// array of enemies

const enemies = [
     {
        FirstName : "Joshua",
        LastName : "Flowers",
        Offenses : [
            "Being a jerk to me in elementary school",
            "Not being nice to me in elementary school"
        ],
        IsReallyHated : true
    },
    {
        FirstName : "Darth",
        LastName : "Vader",
        Offenses : [
            "Cut off Luke's hand",
            "Murdered all those kids",
            "Unkind management practices"
        ],
        IsReallyHated : false
    },
    {
        FirstName : "Betty",
        LastName : "Rudelady",
        Offenses : [
            "Phone calls in the theater",
            "Phone calls on the bus",
            "Phone calls in line at the grocery store",
            "Poor conversationalist"
        ],
        IsReallyHated : true
    },
    {
        FirstName : "Leon",
        LastName : "Peck",
        Offenses : [
            "Keeps giving me a hotplate"
        ],
        IsReallyHated : false
    }

]

//foreach loop for each enemy
console.log("Enemy List")
console.log("------------")

for (const enemy of enemies)
{
    if (enemy.IsReallyHated === true)
    {
        console.log(`${enemy.FirstName} ${enemy.LastName} (Really, really dislike!)`);
    }
    else
    {
        console.log(`${enemy.FirstName} ${enemy.LastName}`);
    }
}