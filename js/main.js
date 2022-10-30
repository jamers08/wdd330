// Portfolio contents

const links = [
    {
        week: "Week 1",
        content: [
            {
                label: "Notes",
                url: "week1/index.html"
            }
        ]
    },
    {
        week: "Week 2",
        content: [
            {
                label: "Chapter 2 Quiz Ninja",
                url: "week2/ch2.html"
            },
            {
                label: "Chapter 3 Quiz Ninja",
                url: "week2/ch3.html"
            },
            {
                label: "Chapter 4 Quiz Ninja",
                url: "week2/ch4.html"
            },
            {
                label: "Team Assignment",
                url: "week2/team.html"
            }
        ]
    },
    {
        week: "Week 3",
        content: [
            {
                label: "Chapter 5 Quiz Ninja",
                url: "week3/ch5.html"
            },
            {
                label: "Chapter 6 Quiz Ninja",
                url: "week3/ch6.html"
            },
            {
                label: "Chapter 7 Quiz Ninja",
                url: "week3/ch7.html"
            },
            {
                label: "Team Assignment",
                url: "week3/team.html"
            }
        ]
    },
    {
        week: "Week 4",
        content: [
            {
                label: "Chapter 8 Quiz Ninja",
                url: "week4/ch8.html"
            },
            {
                label: "Chapter 12 Quiz Ninja",
                url: "week4/ch12.html"
            },
            {
                label: "Chapter 15 Quiz Ninja",
                url: "week4/ch15.html"
            },
            {
                label: "Team Assignment",
                url: "week4/team.html"
            }
        ]
    },
    {
        week: "Week 5",
        content: [
            {
                label: "Chapter 10 Quiz Ninja",
                url: "week5/ch10.html"
            },
            {
                label: "Team Assignment",
                url: "week5/team.html"
            }
        ]
    },
    {
        week: "Week 6",
        content: [
            {
                label: "MidTerm To Do List",
                url: "week6/midterm.html"
            }
        ]
    },
    {
        week: "Week 7",
        content: [
            {
                label: "Team Assignment",
                url: "week7/team.html"
            }
        ]
    }

];

// create the list of contents
function createIndexContents(links) {
    const week = document.querySelector("main");
    links.forEach(link => {

        // create elements
        let h2 = document.createElement("h2");
        h2.innerHTML = link.week;
        week.appendChild(h2);

        let list = document.createElement('ul');
        link.content.forEach(element => {
            let url = document.createElement('a');
            url.innerHTML = element.label;
            url.href = element.url;


            let item = document.createElement('li');
            item.appendChild(url);

            list.appendChild(item);

            week.appendChild(list);

        });

    });
};

createIndexContents(links);