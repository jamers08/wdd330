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
                label: "Notes",
                url: ""
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
                label: "Forms",
                url: "week4/search.html"
            },
            {
                label: "Team Assignment",
                url: "week4/team.html"
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