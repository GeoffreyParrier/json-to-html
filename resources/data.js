data = {
    "menu": {
        "type": "nav",
        "children": {
            "menu_home": {
                "type": "a",
                "link": "#home",
                "content": "Home"
            },
            "menu_contact": {
                "type": "a",
                "link": "#contact",
                "content": "Contact"
            }
        }
    },
    "home": {
        "type": "div",
        children: {
            "chateau": {
                "type": "img",
                "link": "resources/téléchargé.jpeg",
                "data": { "important": "Soon mis à jour" },
                "setAttribute": { "onclick": "alert('yo')" }
            }
        }
    }
};