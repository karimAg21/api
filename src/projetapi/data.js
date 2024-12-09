const movies=[
    {
        "Title": "Fight Club",
        "Image": "https://m.media-amazon.com\/images\/M\/MV5BOTgyOGQ1NDItNGU3Ny00MjU3LTg2YWEtNmEyYjBiMjI1Y2M5XkEyXkFqcGc@._V1_SX300.jpg",
        "Genre": "Drama",
        "Description": "An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into much more.",
        "Year": "1999"
    },
    {
        "Title": "Vertigo",
        "Image": "https://m.media-amazon.com\/images\/M\/MV5BNzEyZTUxMWItMGVhYy00Y2NlLTljYTMtYzBmMzI1YmUyMDBkXkEyXkFqcGc@._V1_SX300.jpg",
        "Genre": "Mystery",
        "Description": "A former San Francisco police detective juggles wrestling with his personal demons and becoming obsessed with the hauntingly beautiful woman he has been hired to trail, who may be deeply disturbed.",
        "Year": "1958"
    },
    {
        "Title": "The Batman",
        "Image": "https://m.media-amazon.com\/images\/M\/MV5BMmU5NGJlMzAtMGNmOC00YjJjLTgyMzUtNjAyYmE4Njg5YWMyXkEyXkFqcGc@._V1_SX300.jpg",
        "Genre": "Action",
        "Description": "When a sadistic serial killer begins murdering key political figures in Gotham, the Batman is forced to investigate the city's hidden corruption and question his family's involvement.",
        "Year": "2022"
    },
    {
        "Title": "The Dark Knight",
        "Image": "https://m.media-amazon.com\/images\/M\/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
        "Genre": "Action",
        "Description": "When a menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman, James Gordon and Harvey Dent must work together to put an end to the madness.",
        "Year": "2008"
    },
    {
        "Title": "Gone Girl",
        "Image": "https://m.media-amazon.com\/images\/M\/MV5BMTk0MDQ3MzAzOV5BMl5BanBnXkFtZTgwNzU1NzE3MjE@._V1_SX300.jpg",
        "Genre": "Thriller",
        "Description": "The husband of a missing woman becomes the chief suspect in her disappearance.",
        "Year": "2014"
    },
    {
        "Title": "Pulp Fiction",
        "Image": "https://m.media-amazon.com\/images\/M\/MV5BYTViYTE3ZGQtNDBlMC00ZTAyLTkyODMtZGRiZDg0MjA2YThkXkEyXkFqcGc@._V1_SX300.jpg",
        "Genre": "Crime",
        "Description": "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
        "Year": "1994"
    },
    {
        "Title": "The Good ,The Bad And The Ugly",
        "Image": "https://m.media-amazon.com\/images\/M\/MV5BMWM5ZjQxM2YtNDlmYi00ZDNhLWI4MWUtN2VkYjBlMTY1ZTkwXkEyXkFqcGc@._V1_SX300.jpg",
        "Genre": "Western",
        "Description": "A bounty hunting scam joins two men in an uneasy alliance against a third in a race to find a fortune in gold buried in a remote cemetery.",
        "Year": "1966"
    },
    {
        "Title": "The Matrix",
        "Image": "https://m.media-amazon.com\/images\/M\/MV5BN2NmN2VhMTQtMDNiOS00NDlhLTliMjgtODE2ZTY0ODQyNDRhXkEyXkFqcGc@._V1_SX300.jpg",
        "Genre": "Action",
        "Description": "When a beautiful stranger leads computer hacker Neo to a forbidding underworld, he discovers the shocking truth--the life he knows is the elaborate deception of an evil cyber-intelligence.",
        "Year": "1999"
    },
    {
        "Title": "Scent Of  A  Women",
        "Image": "https://m.media-amazon.com\/images\/M\/MV5BNzc5ODg2NzMtYTQ4MS00MWFiLWI5NWMtNWNkODNmZjE0ZGVjXkEyXkFqcGc@._V1_SX300.jpg",
        "Genre": "Drama",
        "Description": "A prep school student needing money agrees to \"babysit\" a blind man, but the job is not at all what he anticipated.",
        "Year": "1992"
    },
    {
        "Title": "American History X",
        "Image": "https://m.media-amazon.com\/images\/M\/MV5BMzhiOTQ0NDItOTg0Zi00OGVmLWE0OGEtMTI4NDM0NWMxZWU4XkEyXkFqcGc@._V1_SX300.jpg",
        "Genre": "Crime",
        "Description": "Living a life marked by violence, neo-Nazi Derek finally goes to prison after killing two black youths. Upon his release, Derek vows to change; he hopes to prevent his brother, Danny, who idolizes Derek, from following in his footsteps.",
        "Year": "1998"
    },
    {
        "Title": "Rosemary's Baby",
        "Image": "https://m.media-amazon.com\/images\/M\/MV5BNDlhMDI3OTQtNTBkYy00NWQ5LWJmNWEtZGQwYzZlMTQ4MDI1XkEyXkFqcGc@._V1_SX300.jpg",
        "Genre": "Horror",
        "Description": "A young couple trying for a baby moves into an aging, ornate apartment building on Central Park West, where they find themselves surrounded by peculiar neighbors.",
        "Year": "1968"
    },
    {
        "Title": "Fargo",
        "Image": "https://m.media-amazon.com\/images\/M\/MV5BNjg4MWE0MjEtODFhNy00MjA5LTg5ODktMzgwNWFmZTAwNjBlXkEyXkFqcGc@._V1_SX300.jpg",
        "Genre": "Crime",
        "Description": "Minnesota car salesman Jerry Lundegaard's inept crime falls apart due to his and his henchmen's bungling and the persistent police work of the quite pregnant Marge Gunderson.",
        "Year": "1996"
    },
    {
        "Title": "Saving Private Ryan",
        "Image": "https://m.media-amazon.com\/images\/M\/MV5BZGZhZGQ1ZWUtZTZjYS00MDJhLWFkYjctN2ZlYjE5NWYwZDM2XkEyXkFqcGc@._V1_SX300.jpg",
        "Genre": "War",
        "Description": "Following the Normandy Landings, a group of U.S. soldiers go behind enemy lines to retrieve a paratrooper whose brothers have been killed in action.",
        "Year": "1998"
    },
    {
        "Title": "The Exorcist",
        "Image": "https://m.media-amazon.com\/images\/M\/MV5BZjg3YjE4ZjAtYTdmYS00ZTBkLWE1ZjgtNzAzODUwNzRiYjlmXkEyXkFqcGc@._V1_SX300.jpg",
        "Genre": "Horror",
        "Description": "When a mysterious entity possesses a young girl, her mother seeks the help of two Catholic priests to save her life.",
        "Year": "1973"
    },
    {
        "Title": "12 Angry Man",
        "Image": "https://m.media-amazon.com\/images\/M\/MV5BYjE4NzdmOTYtYjc5Yi00YzBiLWEzNDEtNTgxZGQ2MWVkN2NiXkEyXkFqcGc@._V1_SX300.jpg",
        "Genre": "Drama",
        "Description": "The jury in a New York City murder trial is frustrated by a single member whose skeptical caution forces them to more carefully consider the evidence before jumping to a hasty verdict.",
        "Year": "1957"
    },
    {
        "Title": "Goodfellas",
        "Image": "https://m.media-amazon.com\/images\/M\/MV5BN2E5NzI2ZGMtY2VjNi00YTRjLWI1MDUtZGY5OWU1MWJjZjRjXkEyXkFqcGc@._V1_SX300.jpg",
        "Genre": "Crime",
        "Description": "The story of Henry Hill and his life in the mafia, covering his relationship with his wife Karen and his mob partners Jimmy Conway and Tommy DeVito.",
        "Year": "1990"
    },
    {
        "Title": "One Flew Over the Cuckoo's Nest",
        "Image": "https://m.media-amazon.com\/images\/M\/MV5BYjBkMjgzMzYtNzRiMS00NDc3LWE4YTUtZjYxYjZhNjNhYzhhXkEyXkFqcGc@._V1_SX300.jpg",
        "Genre": "Drama",
        "Description": "In the Fall of 1963, a Korean War veteran and criminal pleads insanity and is admitted to a mental institution, where he rallies up the scared patients against the tyrannical nurse.",
        "Year": "1975"
    },
    {
        "Title": "Se7en",
        "Image": "https://m.media-amazon.com\/images\/M\/MV5BY2IzNzMxZjctZjUxZi00YzAxLTk3ZjMtODFjODdhMDU5NDM1XkEyXkFqcGc@._V1_SX300.jpg",
        "Genre": "Thriller",
        "Description": "Two detectives, a rookie and a veteran, hunt a serial killer who uses the seven deadly sins as his motives.",
        "Year": "1995"
    },
    {
        "Title": "Gladiator",
        "Image": "https://m.media-amazon.com\/images\/M\/MV5BYWQ4YmNjYjEtOWE1Zi00Y2U4LWI4NTAtMTU0MjkxNWQ1ZmJiXkEyXkFqcGc@._V1_SX300.jpg",
        "Genre": "Action",
        "Description": "A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery.",
        "Year": "2000"
    },
    {
        "Title": "DeadPool",
        "Image": "https://m.media-amazon.com\/images\/M\/MV5BNzY3ZWU5NGQtOTViNC00ZWVmLTliNjAtNzViNzlkZWQ4YzQ4XkEyXkFqcGc@._V1_SX300.jpg",
        "Genre": "Action",
        "Description": "A wisecracking mercenary gets experimented on and becomes immortal yet hideously scarred, and sets out to track down the man who ruined his looks.",
        "Year": "2016"
    },
    {
        "Title": "Heat",
        "Image": "https://m.media-amazon.com\/images\/M\/MV5BMTkxYjU1OTMtYWViZC00ZjAzLWI3MDktZGQ2N2VmMjVjNDRlXkEyXkFqcGc@._V1_SX300.jpg",
        "Genre": "Action",
        "Description": "A group of high-end professional thieves start to feel the heat from the LAPD when they unknowingly leave a verbal clue at their latest heist.",
        "Year": "1995"
    },
    {
        "Title": "1917",
        "Image": "https://m.media-amazon.com\/images\/M\/MV5BYzkxZjg2NDQtMGVjMy00NWZkLTk0ZDEtZWE3NDYwYjAyMTg1XkEyXkFqcGc@._V1_SX300.jpg",
        "Genre": "War",
        "Description": "April 6th, 1917. As an infantry battalion assembles to wage war deep in enemy territory, two soldiers are assigned to race against time and deliver a message that will stop 1,600 men from walking straight into a deadly trap.",
        "Year": "2019"
    },
    {
        "Title": "The Shawshank Redemption",
        "Image": "https://m.media-amazon.com\/images\/M\/MV5BMDAyY2FhYjctNDc5OS00MDNlLThiMGUtY2UxYWVkNGY2ZjljXkEyXkFqcGc@._V1_SX300.jpg",
        "Genre": "Drama",
        "Description": "A banker convicted of uxoricide forms a friendship over a quarter century with a hardened convict, while maintaining his innocence and trying to remain hopeful through simple compassion.",
        "Year": "1994"
    },
    {
        "Title": "Rear Window",
        "Image": "https://m.media-amazon.com\/images\/M\/MV5BODZhOWI1ODgtMzdiOS00YjNkLTgwOGUtYmIyZDg5ZmQwMzQ1XkEyXkFqcGc@._V1_SX300.jpg",
        "Genre": "Thriller",
        "Description": "A bored photographer recovering from a broken leg passes the time by watching his neighbors and begins to suspect one of them of murder.",
        "Year": "1954"
    },
    {
        "Title": "The Big Lebowski",
        "Image": "https://m.media-amazon.com\/images\/M\/MV5BY2E3OWQ5OWYtYTRkMC00NjVjLWIzZDQtNmRmM2ZiYTIyYmYxXkEyXkFqcGc@._V1_SX300.jpg",
        "Genre": "Comedy",
        "Description": "Jeff \"The Dude\" Lebowski, mistaken for a millionaire of the same name, seeks restitution for his ruined rug and enlists his bowling buddies to help get it.",
        "Year": "1998"
    },
    {
        "Title": "No Country For Old Man",
        "Image": "https://m.media-amazon.com\/images\/M\/MV5BMjA5Njk3MjM4OV5BMl5BanBnXkFtZTcwMTc5MTE1MQ@@._V1_SX300.jpg",
        "Genre": "Crime",
        "Description": "Violence and mayhem ensue after a hunter stumbles upon the aftermath of a drug deal gone wrong and over two million dollars in cash near the Rio Grande.",
        "Year": "2007"
    },
    {
        "Title": "Inglourious Basterds",
        "Image": "https://m.media-amazon.com\/images\/M\/MV5BODZhMWJlNjYtNDExNC00MTIzLTllM2ItOGQ2NGVjNDQ3MzkzXkEyXkFqcGc@._V1_SX300.jpg",
        "Genre": "War",
        "Description": "In Nazi-occupied France during World War II, a plan to assassinate Nazi leaders by a group of Jewish U.S. soldiers coincides with a theatre owner's vengeful plans for the same.",
        "Year": "2009"
    },
    {
        "Title": "Shutter Island",
        "Image": "https://m.media-amazon.com\/images\/M\/MV5BN2FjNWExYzEtY2YzOC00YjNlLTllMTQtNmIwM2Q1YzBhOWM1XkEyXkFqcGc@._V1_SX300.jpg",
        "Genre": "Mystery",
        "Description": "Two US marshals are sent to a mental institution on an inhospitable island in order to investigate the disappearance of a patient.",
        "Year": "2010"
    },
    {
        "Title": "The Truman Show",
        "Image": "https://m.media-amazon.com\/images\/M\/MV5BNzA3ZjZlNzYtMTdjMy00NjMzLTk5ZGYtMTkyYzNiOGM1YmM3XkEyXkFqcGc@._V1_SX300.jpg",
        "Genre": "Comedy",
        "Description": "An insurance salesman discovers his whole life is actually a reality TV show.",
        "Year": "1998"
    },
    {
        "Title": "The Lord of the Rings: The Fellowship of the Ring",
        "Image": "https://m.media-amazon.com\/images\/M\/MV5BNzIxMDQ2YTctNDY4MC00ZTRhLTk4ODQtMTVlOWY4NTdiYmMwXkEyXkFqcGc@._V1_SX300.jpg",
        "Genre": "Action",
        "Description": "A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.",
        "Year": "2001"
    },
    {
        "Title": "The Lord of the Rings: The Two Towers",
        "Image": "https://m.media-amazon.com\/images\/M\/MV5BMGQxMDdiOWUtYjc1Ni00YzM1LWE2NjMtZTg3Y2JkMjEzMTJjXkEyXkFqcGc@._V1_SX300.jpg",
        "Genre": "Action",
        "Description": "While Frodo and Sam edge closer to Mordor with the help of the shifty Gollum, the divided fellowship makes a stand against Sauron's new ally, Saruman, and his hordes of Isengard.",
        "Year": "2002"
    },
    {
        "Title": "The Lord of the Rings: The Return of the King",
        "Image": "https://m.media-amazon.com\/images\/M\/MV5BMTZkMjBjNWMtZGI5OC00MGU0LTk4ZTItODg2NWM3NTVmNWQ4XkEyXkFqcGc@._V1_SX300.jpg",
        "Genre": "Action",
        "Description": "Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.",
        "Year": "2003"
    },
    {
        "Title": "Schindler's List",
        "Image": "https://m.media-amazon.com\/images\/M\/MV5BNjM1ZDQxYWUtMzQyZS00MTE1LWJmZGYtNGUyNTdlYjM3ZmVmXkEyXkFqcGc@._V1_SX300.jpg",
        "Genre": "Biography",
        "Description": "In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.",
        "Year": "1993"
    },
    {
        "Title": "Inception",
        "Image": "https://m.media-amazon.com\/images\/M\/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
        "Genre": "Sci-Fi",
        "Description": "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O., but his tragic past may doom the project and his team to disaster.",
        "Year": "2010"
    },
    {
        "Title": "Requiem for a Dream",
        "Image": "https://m.media-amazon.com\/images\/M\/MV5BN2ZlMjIzZjctYzA2My00ZWYyLWI4ZjctMGI2NWYyNzFiZjAwXkEyXkFqcGc@._V1_SX300.jpg",
        "Genre": "Drama",
        "Description": "The drug-induced utopias of four Coney Island people are shattered when their addictions run deep.\r\n\r\n",
        "Year": "2000"
    },
    {
        "Title": "Oldboy",
        "Image": "https://m.media-amazon.com\/images\/M\/MV5BMTI3NTQyMzU5M15BMl5BanBnXkFtZTcwMTM2MjgyMQ@@._V1_SX300.jpg",
        "Genre": "Action",
        "Description": "After being kidnapped and imprisoned for fifteen years, Oh Dae-Su is released, only to find that he must track down his captor in five days.",
        "Year": "2003"
    },
    {
        "Title": "Braveheart",
        "Image": "https://m.media-amazon.com\/images\/M\/MV5BNGMxZDBhNGQtYTZlNi00N2UzLWI4NDEtNmUzNWM2NTdmZDA0XkEyXkFqcGc@._V1_SX300.jpg",
        "Genre": "War",
        "Description": "Scottish warrior William Wallace leads his countrymen in a rebellion to free his homeland from the tyranny of King Edward I of England.",
        "Year": "1995"
    },
    {
        "Title": "Seven Samurai",
        "Image": "https://m.media-amazon.com\/images\/M\/MV5BZjliMWExOTMtZDQ3ZS00NWU3LWIyN2EtMjllNzk3ZTNlYzg4XkEyXkFqcGc@._V1_SX300.jpg",
        "Genre": "Action",
        "Description": "Farmers from a village exploited by bandits hire a veteran samurai for protection, and he gathers six other samurai to join him.",
        "Year": "1954"
    },
    {
        "Title": "City of God",
        "Image": "https://m.media-amazon.com\/images\/M\/MV5BYjY4NGI5OTUtY2ZlZS00Zjk4LTk5N2MtN2JmYWVjNGNmMGRlXkEyXkFqcGc@._V1_SX300.jpg",
        "Genre": "Crime",
        "Description": "In the slums of Rio, two kids' paths diverge as one struggles to become a photographer and the other a kingpin.",
        "Year": "2002"
    },
    {
        "Title": "Life Is Beautiful",
        "Image": "https://m.media-amazon.com\/images\/M\/MV5BZTBhOGYzZjQtYzE0Mi00MGIwLWE0MWYtNzMxNTM2OTFkM2NjXkEyXkFqcGc@._V1_SX300.jpg",
        "Genre": "Drama",
        "Description": "When an open-minded Jewish waiter and his son become victims of the Holocaust, he uses a perfect mixture of will, humor and imagination to protect his son from the dangers around their camp.",
        "Year": "1997"
    },
    {
        "Title": "The Pianist",
        "Image": "https://m.media-amazon.com\/images\/M\/MV5BMjEwNmEwYjgtNTk3ZC00NjljLTg5ZDctZTY3ZGQwZjRkZmQxXkEyXkFqcGc@._V1_SX300.jpg",
        "Genre": "War",
        "Description": "During WWII, acclaimed Polish musician Wladyslaw faces various struggles as he loses contact with his family. As the situation worsens, he hides in the ruins of Warsaw in order to survive.",
        "Year": "2002"
    },
    {
        "Title": "The Green Mile",
        "Image": "https://m.media-amazon.com\/images\/M\/MV5BMTUxMzQyNjA5MF5BMl5BanBnXkFtZTYwOTU2NTY3._V1_SX300.jpg",
        "Genre": "Drama",
        "Description": "Paul Edgecomb, the head guard of a prison, meets an inmate, John Coffey, a black man who is accused of murdering two girls. His life changes drastically when he discovers that John has a special gift.",
        "Year": "1999"
    },
    {
        "Title": "Magnolia",
        "Image": "https://m.media-amazon.com\/images\/M\/MV5BOWY0Zjk1YTMtMGFlYi00OTFmLWEyOTAtNmRkYjE0ZDJiZWMwXkEyXkFqcGc@._V1_SX300.jpg",
        "Genre": "Drama",
        "Description": "An epic mosaic of interrelated characters in search of love, forgiveness and meaning in the San Fernando Valley.\r\n\r\n",
        "Year": "1999"
    },
    {
        "Title": "Punch-Drunk Love",
        "Image": "https://m.media-amazon.com\/images\/M\/MV5BZTYyMTQ2MDAtMzYzYS00YjZiLWJiNDUtZjEwNzM4YzE1ZDhhXkEyXkFqcGc@._V1_SX300.jpg",
        "Genre": "Comedy",
        "Description": "Socially frustrated Barry Egan calls a phone-sex line to curb his loneliness. Little does he know it will land him in deep trouble and will jeopardize his burgeoning romance with the mysterious Lena.",
        "Year": "2002"
    },
    {
        "Title": "Uncut Gems",
        "Image": "https://m.media-amazon.com\/images\/M\/MV5BNmI0YjA5NjItYzExYi00NzkxLTkxNDctNGJjYTZhM2M0NDQ0XkEyXkFqcGc@._V1_SX300.jpg",
        "Genre": "Crime",
        "Description": "With his debts mounting and angry collectors closing in, a fast-talking New York City jeweler risks everything in hope of staying afloat and alive.",
        "Year": "2019"
    },
    {
        "Title": "Nightcrawler",
        "Image": "https://m.media-amazon.com\/images\/M\/MV5BYjMwMmI5MWQtOTU4OS00OTAyLTg0OTYtNmQ5YzExZTQ3ZWJhXkEyXkFqcGc@._V1_SX300.jpg",
        "Genre": "Crime",
        "Description": "A petty thief desperate for work muscles into the world of crime journalism and becomes the star of his own story as he blurs the line between observer and participant.",
        "Year": "2014"
    },
    {
        "Title": "Get Out",
        "Image": "https://m.media-amazon.com\/images\/M\/MV5BMjUxMDQwNjcyNl5BMl5BanBnXkFtZTgwNzcwMzc0MTI@._V1_SX300.jpg",
        "Genre": "Horror",
        "Description": "A young African-American visits his white girlfriend's parents for the weekend, where his simmering uneasiness about their reception of him eventually reaches a boiling point.",
        "Year": "2017"
    },
    {
        "Title": "Zodiac",
        "Image": "https://m.media-amazon.com\/images\/M\/MV5BNDFkMTRkZmQtM2I0NC00NjJjLWJlMDctNTNiZWYxYzhjZDZiXkEyXkFqcGc@._V1_SX300.jpg",
        "Genre": "Crime",
        "Description": "Between 1968 and 1983, a San Francisco cartoonist becomes an amateur detective obsessed with tracking down the Zodiac Killer, an unidentified individual who terrorizes Northern California with a killing spree.",
        "Year": "2007"
    },
    {
        "Title": "Midsommar",
        "Image": "https://m.media-amazon.com\/images\/M\/MV5BMzQxNzQzOTQwM15BMl5BanBnXkFtZTgwMDQ2NTcwODM@._V1_SX300.jpg",
        "Genre": "Horror",
        "Description": "A couple travels to Northern Europe to visit a rural hometown's fabled Swedish mid-summer festival. What begins as an idyllic retreat quickly devolves into an increasingly violent and bizarre competition at the hands of a pagan cult.",
        "Year": "2019"
    },
    {
        "Title": "Hereditary",
        "Image": "https://m.media-amazon.com\/images\/M\/MV5BNTEyZGQwODctYWJjZi00NjFmLTg3YmEtMzlhNjljOGZhMWMyXkEyXkFqcGc@._V1_SX300.jpg",
        "Genre": "Horror",
        "Description": "A grieving family is haunted by tragic and disturbing occurrences.",
        "Year": "2018"
    },
    {
        "Title": "The Conjuring",
        "Image": "https://m.media-amazon.com\/images\/M\/MV5BMTM3NjA1NDMyMV5BMl5BanBnXkFtZTcwMDQzNDMzOQ@@._V1_SX300.jpg",
        "Genre": "Horror",
        "Description": "In order to get away from their busy lives, the Wilson family takes a vacation to Santa Cruz, California. At night, four strangers break into Adelaide's childhood home. The family is shocked to find out that the intruders look like them.",
        "Year": "2013"
    },
    {
        "Title": "The Conjuring 2",
        "Image": "https://m.media-amazon.com\/images\/M\/MV5BOTRkMDlmZWEtMzQyYy00YzgyLTgwM2QtNzgxYmIwNGVlYmJlXkEyXkFqcGc@._V1_SX300.jpg",
        "Genre": "Horror",
        "Description": "Ed and Lorraine Warren travel to North London to help a single mother raising four children alone in a house plagued by a supernatural spirit.",
        "Year": "2016"
    },
    {
        "Title": "Snatch",
        "Image": "https://m.media-amazon.com\/images\/M\/MV5BYzk5NjJkMTQtN2IyNC00YWM5LTlhZmMtNGI3MWNhMTU1YTc4XkEyXkFqcGc@._V1_SX300.jpg",
        "Genre": "Comedy",
        "Description": "Unscrupulous boxing promoters, violent bookmakers, a Russian gangster, incompetent amateur robbers and supposedly Jewish jewelers fight to track down a priceless stolen diamond.",
        "Year": "2000"
    },
    {
        "Title": "SuperBad",
        "Image": "https://m.media-amazon.com\/images\/M\/MV5BNjk0MzdlZGEtNTRkOC00ZDRiLWJkYjAtMzUzYTRiNzk1YTViXkEyXkFqcGc@._V1_SX300.jpg",
        "Genre": "Comedy",
        "Description": "Two co-dependent high school seniors are forced to deal with separation anxiety after their plan to stage a booze-soaked party goes awry.",
        "Year": "2007"
    },
    {
        "Title": "Lock, Stock and Two Smoking Barrels",
        "Image": "https://m.media-amazon.com\/images\/M\/MV5BMmY1M2M5ZmMtYzllZC00YzAxLTk4MjktZDJkNjA1MTUwMGQ4XkEyXkFqcGc@._V1_SX300.jpg",
        "Genre": "Comedy",
        "Description": "When four small-time criminals lose a rigged poker game against a London kingpin, he gives them one week to settle their enormous debt.",
        "Year": "1998"
    },
    {
        "Title": "Back to the Future",
        "Image": "https://m.media-amazon.com\/images\/M\/MV5BZmM3ZjE0NzctNjBiOC00MDZmLTgzMTUtNGVlOWFlOTNiZDJiXkEyXkFqcGc@._V1_SX300.jpg",
        "Genre": "Sci-Fi",
        "Description": "Marty McFly, a 17-year-old high school student, is accidentally sent 30 years into the past in a time-traveling DeLorean invented by his close friend, the maverick scientist Doc Brown.",
        "Year": "1985"
    },
    {
        "Title": "Back to the Future Part II",
        "Image": "https://m.media-amazon.com\/images\/M\/MV5BMTNlOTRmOTEtMTAyMi00NjFiLTk3NDMtNWI0YzA3ZTZlYjZiXkEyXkFqcGc@._V1_SX300.jpg",
        "Genre": "Sci-Fi",
        "Description": "After visiting 2015, Marty McFly must repeat his visit to 1955 to prevent disastrous changes to 1985...without interfering with his first trip.",
        "Year": "1989"
    },
    {
        "Title": "Back to the Future Part III",
        "Image": "https://m.media-amazon.com\/images\/M\/MV5BNTNkNzJmY2MtOGNjYi00NDJmLWIyZTQtNmFmMGQ5M2VlOTI0XkEyXkFqcGc@._V1_SX300.jpg",
        "Genre": "Sci-Fi",
        "Description": "Stranded in 1955, Marty McFly learns about the death of Doc Brown in 1885 and must travel back in time to save him. With no fuel readily available for the DeLorean, the two must figure how to escape the Old West before Emmett is murdered.",
        "Year": "1990"
    },
    {
        "Title": "Ghostbusters",
        "Image": "https://m.media-amazon.com\/images\/M\/MV5BMGI0Yjg2ODAtNDYzNi00Njc2LTlkMmMtMmRmYWI5MDE4ZGRkXkEyXkFqcGc@._V1_SX300.jpg",
        "Genre": "Comedy",
        "Description": "Three parapsychologists forced out of their university funding set up shop as a unique ghost removal service in New York City, attracting frightened yet skeptical customers.",
        "Year": "1984"
    },
    {
        "Title": "The Great Dictator",
        "Image": "https://m.media-amazon.com\/images\/M\/MV5BMjc4ZjEwNDUtMjlmZS00NzQ4LTg2N2MtMGI3ZjMyMmM3ZDM2XkEyXkFqcGc@._V1_SX300.jpg",
        "Genre": "Comedy",
        "Description": "Dictator Adenoid Hynkel tries to expand his empire while a poor Jewish barber tries to avoid persecution from Hinkel's regime.",
        "Year": "1940"
    },
    {
        "Title": "City Lights",
        "Image": "https://m.media-amazon.com\/images\/M\/MV5BM2U4NjgzODUtODkyOC00YTE2LTlhNTItYzFlYmM1NTEzZDA2XkEyXkFqcGc@._V1_SX300.jpg",
        "Genre": "Comedy",
        "Description": "With the aid of a wealthy erratic tippler, a dewy-eyed tramp who has fallen in love with a sightless flower girl accumulates money to be able to help her medically.",
        "Year": "1931"
    },
    {
        "Title": "Modern Times",
        "Image": "https://m.media-amazon.com\/images\/M\/MV5BODVkZGFhNGQtYjdiYi00Njc4LWFmYTItNTlmNzJjMTg1ZDc5XkEyXkFqcGc@._V1_SX300.jpg",
        "Genre": "Comedy",
        "Description": "The Tramp struggles to live in modern industrial society with the help of a young homeless woman.",
        "Year": "1936"
    },
    {
        "Title": "Harakiri",
        "Image": "https://m.media-amazon.com\/images\/M\/MV5BZThiZjU5ZDQtZDI4Mi00ZGYyLTkzOTktYmIzZTFlZTkxYzg5XkEyXkFqcGc@._V1_SX300.jpg",
        "Genre": "Action",
        "Description": "When a ronin requesting seppuku at a feudal lord's palace is told of the brutal suicide of another ronin who previously visited, he reveals how their pasts are intertwined - and in doing so challenges the clan's integrity.",
        "Year": "1962"
    },
    {
        "Title": "Casablanca",
        "Image": "https://m.media-amazon.com\/images\/M\/MV5BNWEzN2U1YTYtYTQyMS00NTVkLWE2NGQtZWFlMmM0MDNjMmRiXkEyXkFqcGc@._V1_SX300.jpg",
        "Genre": "Romance",
        "Description": "A cynical expatriate American cafe owner struggles to decide whether or not to help his former lover and her fugitive husband escape the Nazis in French Morocco.",
        "Year": "1942"
    },
    {
        "Title": "Psycho",
        "Image": "https://m.media-amazon.com\/images\/M\/MV5BYjZhMzFiZjItODA3ZC00MmRhLWIzMGYtMmVjOWUwYTA3MTRjXkEyXkFqcGc@._V1_SX300.jpg",
        "Genre": "Horror",
        "Description": "A secretary on the run for embezzlement takes refuge at a secluded California motel owned by a repressed man and his overbearing mother.",
        "Year": "1960"
    },
    {
        "Title": "American Psycho",
        "Image": "https://m.media-amazon.com\/images\/M\/MV5BNzBjM2I5ZjUtNmIzNy00OGNkLWIwZDMtOTAwYWUwMzA2YjdlXkEyXkFqcGc@._V1_SX300.jpg",
        "Genre": "Horor",
        "Description": "A wealthy New York City investment banking executive, Patrick Bateman, hides his alternate psychopathic ego from his co-workers and friends as he delves deeper into his violent, hedonistic fantasies.",
        "Year": "2000"
    },
    {
        "Title": "The Silence of the Lambs",
        "Image": "https://m.media-amazon.com\/images\/M\/MV5BNDdhOGJhYzctYzYwZC00YmI2LWI0MjctYjg4ODdlMDExYjBlXkEyXkFqcGc@._V1_SX300.jpg",
        "Genre": "Crime",
        "Description": "A young F.B.I. cadet must receive the help of an incarcerated and manipulative cannibal killer to help catch another serial killer, a madman who skins his victims.",
        "Year": "1991"
    },
    {
        "Title": "Forrest Gump",
        "Image": "https://m.media-amazon.com\/images\/M\/MV5BNDYwNzVjMTItZmU5YS00YjQ5LTljYjgtMjY2NDVmYWMyNWFmXkEyXkFqcGc@._V1_SX300.jpg",
        "Genre": "Comedy",
        "Description": "The history of the United States from the 1950s to the '70s unfolds from the perspective of an Alabama man with an IQ of 75, who yearns to be reunited with his childhood sweetheart.",
        "Year": "1994"
    },
    {
        "Title": "Chinatown",
        "Image": "https://m.media-amazon.com\/images\/M\/MV5BNmRmZTE0NmUtZjhiZi00MzQ3LTk3ZjctN2Q3ODYzY2U3MDk3XkEyXkFqcGc@._V1_SX300.jpg",
        "Genre": " Mystery",
        "Description": "A private detective hired to expose an adulterer in 1930s Los Angeles finds himself caught up in a web of deceit, corruption, and murder.",
        "Year": "1962"
    },
    {
        "Title": "Memento",
        "Image": "https://m.media-amazon.com\/images\/M\/MV5BYmQ3MjliNjAtNWFiZS00YWI1LTlmZTktMzBiNDE1NjRhZjU0XkEyXkFqcGc@._V1_SX300.jpg",
        "Genre": "Mystery",
        "Description": "Leonard Shelby, an insurance investigator, suffers from anterograde amnesia and uses notes and tattoos to hunt for the man he thinks killed his wife, which is the last thing he remembers.",
        "Year": "2000"
    },
    {
        "Title": "The Prestige",
        "Image": "https://m.media-amazon.com\/images\/M\/MV5BMjA4NDI0MTIxNF5BMl5BanBnXkFtZTYwNTM0MzY2._V1_SX300.jpg",
        "Genre": "Mystery",
        "Description": "Rival 19th-century magicians engage in a bitter battle for trade secrets.",
        "Year": "2006"
    },
    {
        "Title": "The Usual Suspects",
        "Image": "https://m.media-amazon.com\/images\/M\/MV5BOTE5MDUxZDUtZWZmZC00NDVmLWFhOGQtNWI2YTc4NzY3MGQ0XkEyXkFqcGc@._V1_SX300.jpg",
        "Genre": "Crime",
        "Description": "The sole survivor of a pier shoot-out tells the story of how a notorious criminal influenced the events that began with five criminals meeting in a seemingly random police lineup.",
        "Year": "1995"
    },
    {
        "Title": "Incendies",
        "Image": "https://m.media-amazon.com\/images\/M\/MV5BYWFmMjdmNjctNzhhOC00ZmMzLTkwOGItMmVmZDU4MjE2MTYwXkEyXkFqcGc@._V1_SX300.jpg",
        "Genre": "Mystery",
        "Description": "Twins journey to the Middle East to discover their family history and fulfill their mother's last wishes.",
        "Year": "2010"
    },
    {
        "Title": "North by Northwest",
        "Image": "https://m.media-amazon.com\/images\/M\/MV5BZWIzODI2OGItMzM0Ny00OGRmLTlkNmItMDQxMTFmMTk3YmQwXkEyXkFqcGc@._V1_SX300.jpg",
        "Genre": "Mystery",
        "Description": "A New York City advertising executive goes on the run after being mistaken for a government agent by a group of foreign spies, and falls for a woman whose loyalties he begins to doubt.",
        "Year": "1959"
    },
    {
        "Title": "Citizen Kane",
        "Image": "https://m.media-amazon.com\/images\/M\/MV5BYjk1ZDJlMmUtOWQ0Zi00MDM5LTk1OGYtODczNjFmMGYwZGVkXkEyXkFqcGc@._V1_SX300.jpg",
        "Genre": "Mystery",
        "Description": "Following the death of publishing tycoon Charles Foster Kane, reporters scramble to uncover the meaning of his final utterance: 'Rosebud.'",
        "Year": "1941"
    },
    {
        "Title": "The Sixth Sense",
        "Image": "https://m.media-amazon.com\/images\/M\/MV5BZWQ2OTY0M2UtMTQxNC00MmIzLTllNDQtNDQ0MTQyYzI2M2ZiXkEyXkFqcGc@._V1_SX300.jpg",
        "Genre": "Mystery",
        "Description": "A child psychologist starts treating a young boy with a disturbing secret.",
        "Year": "1999"
    },
    {
        "Title": "Prisoners",
        "Image": "https://m.media-amazon.com\/images\/M\/MV5BMTg0NTIzMjQ1NV5BMl5BanBnXkFtZTcwNDc3MzM5OQ@@._V1_SX300.jpg",
        "Genre": "Mystery",
        "Description": "Keller Dover is facing every parent's worst nightmare. His six-year-old daughter, Anna, is missing, together with her friend, Joy, and as minutes turn to hours, panic sets in. The only lead is an RV that had been parked on their street.",
        "Year": "2013"
    },
    {
        "Title": "Taxi Driver",
        "Image": "https://m.media-amazon.com\/images\/M\/MV5BZDNhMGYwM2UtMTdlZS00MGQ1LWI2YzAtODY5YWI1MjYyNzRmXkEyXkFqcGc@._V1_SX300.jpg",
        "Genre": "Crime",
        "Description": "A mentally unstable veteran works as a nighttime taxi driver in New York City, where the perceived decadence and sleaze fuels his urge for violent action.",
        "Year": "1976"
    },
    {
        "Title": "12th Fail",
        "Image": "https://m.media-amazon.com\/images\/M\/MV5BNTE3OTIxZDYtNjA0NC00N2YxLTg1NGQtOTYxNmZkMDkwOWNjXkEyXkFqcGc@._V1_SX300.jpg",
        "Genre": "Drama",
        "Description": "The real-life story of IPS Officer Manoj Kumar Sharma and IRS Officer Shraddha Joshi.",
        "Year": "2023"
    },
    {
        "Title": "The Lives of Others",
        "Image": "https://m.media-amazon.com\/images\/M\/MV5BYjM1N2Q0YWEtN2E5MC00NDM3LTk2NTEtMTc1NTk5OTA5ZGIzXkEyXkFqcGc@._V1_SX300.jpg",
        "Genre": "Drama",
        "Description": "In 1984 East Berlin, an agent of the secret police conducting surveillance on a writer and his lover finds himself becoming increasingly absorbed by their lives.",
        "Year": "2006"
    },
    {
        "Title": "Sunset Boulevard",
        "Image": "https://m.media-amazon.com\/images\/M\/MV5BMTU0NTkyNzYwMF5BMl5BanBnXkFtZTgwMDU0NDk5MTI@._V1_SX300.jpg",
        "Genre": "Drama",
        "Description": "A screenwriter develops a dangerous relationship with a faded film star determined to make a triumphant return.",
        "Year": "1950"
    },
    {
        "Title": "It's a Wonderful Life",
        "Image": "https://m.media-amazon.com\/images\/M\/MV5BMDM4OWFhYjEtNTE5Yy00NjcyLTg5N2UtZDQwNDZlYjlmNDU5XkEyXkFqcGc@._V1_SX300.jpg",
        "Genre": "Romance",
        "Description": "An angel is sent from Heaven to help a desperately frustrated businessman by showing him what life would have been like if he had never existed.",
        "Year": "1946"
    },
    {
        "Title": "Eternal Sunshine of the Spotless Mind",
        "Image": "https://m.media-amazon.com\/images\/M\/MV5BMTY4NzcwODg3Nl5BMl5BanBnXkFtZTcwNTEwOTMyMw@@._V1_SX300.jpg",
        "Genre": "Romance",
        "Description": "When their relationship turns sour, a couple undergoes a medical procedure to have each other erased from their memories forever.",
        "Year": "2004"
    },
    {
        "Title": "Am\u00e9lie",
        "Image": "https://m.media-amazon.com\/images\/M\/MV5BOTNmYzY0MWQtZGZmNy00Y2Y4LWFmMDQtMTZjYTdiYzEwZGQ2XkEyXkFqcGc@._V1_SX300.jpg",
        "Genre": "Romance",
        "Description": "Despite being caught in her imaginative world, young waitress Amelie decides to help people find happiness. Her quest to spread joy leads her on a journey during which she finds true love.",
        "Year": "2001"
    },
    {
        "Title": "Some Like It Hot",
        "Image": "https://m.media-amazon.com\/images\/M\/MV5BZTllZDYyNjEtY2RmMS00NmJhLWI4ODAtMTQ0NWFiZTJhZjA0XkEyXkFqcGc@._V1_SX300.jpg",
        "Genre": "Romance",
        "Description": "After two male musicians witness a mob hit, they flee the state in an all-female band disguised as women, but further complications set in.",
        "Year": "1959"
    },
    {
        "Title": "Gone with the Wind",
        "Image": "https://m.media-amazon.com\/images\/M\/MV5BYmYxZTE3YzMtYmE2Yy00NmFlLTkzYTAtYTAzN2IzNDFkN2E0XkEyXkFqcGc@._V1_SX300.jpg",
        "Genre": "Romance",
        "Description": "A sheltered and manipulative Southern belle and a roguish profiteer face off in a turbulent romance as the society around them crumbles with the end of slavery and is rebuilt during the Civil War and Reconstruction periods.",
        "Year": "1939"
    },
    {
        "Title": "Singin' in the Rain",
        "Image": "https://m.media-amazon.com\/images\/M\/MV5BMGQzZDFjZWUtZDU4ZS00ZjM3LTgyYmItYjA3YmIwYzRkZWY3XkEyXkFqcGc@._V1_SX300.jpg",
        "Genre": "Romance",
        "Description": "A silent film star falls for a chorus girl just as he and his delusionally jealous screen partner are trying to make the difficult transition to talking pictures in 1920s Hollywood.",
        "Year": "1952"
    },
    {
        "Title": "The Godfather",
        "Image": "https://m.media-amazon.com\/images\/M\/MV5BYTJkNGQyZDgtZDQ0NC00MDM0LWEzZWQtYzUzZDEwMDljZWNjXkEyXkFqcGc@._V1_SX300.jpg",
        "Genre": "Crime",
        "Description": "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
        "Year": "1972"
    },
    {
        "Title": "The Godfather Part II",
        "Image": "https://m.media-amazon.com\/images\/M\/MV5BNzc1OWY5MjktZDllMi00ZDEzLWEwMGItYjk1YmRhYjBjNTVlXkEyXkFqcGc@._V1_SX300.jpg",
        "Genre": "Crime",
        "Description": "The early life and career of Vito Corleone in 1920s New York City is portrayed, while his son, Michael, expands and tightens his grip on the family crime syndicate.",
        "Year": "1974"
    },
    {
        "Title": "The Godfather Part III",
        "Image": "https://m.media-amazon.com\/images\/M\/MV5BMDVjODgzNTEtNjBiNS00ODBjLWEwZjUtMDljZTFhOTA4M2MxXkEyXkFqcGc@._V1_SX300.jpg",
        "Genre": "Crime",
        "Description": "Follows Michael Corleone, now in his 60s, as he seeks to free his family from crime and find a suitable successor to his empire.",
        "Year": "1990"
    },
    {
        "Title": "The Sound of Music",
        "Image": "https://m.media-amazon.com\/images\/M\/MV5BYWJhYmU4MjQtZDJhYi00ZGVjLTlkNTEtNzkzNGVjOWQ3MjcwXkEyXkFqcGc@._V1_SX300.jpg",
        "Genre": "Romance",
        "Description": "A young novice is sent by her convent in 1930s Austria to become a governess to the seven children of a widowed naval officer.",
        "Year": "1965"
    },
    {
        "Title": "Before Sunrise",
        "Image": "https://m.media-amazon.com\/images\/M\/MV5BZDZhZmI1ZTUtYWI3NC00NTMwLTk3NWMtNDc0OGNjM2I0ZjlmXkEyXkFqcGc@._V1_SX300.jpg",
        "Genre": "Romance",
        "Description": "A young man and woman meet on a train in Europe, and wind up spending one evening together in Vienna. Unfortunately, both know that this will probably be their only night together.",
        "Year": "1995"
    },
    {
        "Title": "Before Sunset",
        "Image": "https://m.media-amazon.com\/images\/M\/MV5BMTQ1MjAwNTM5Ml5BMl5BanBnXkFtZTYwNDM0MTc3._V1_SX300.jpg",
        "Genre": "Romance",
        "Description": "Nine years after Jesse and Celine first met, they encounter each other again on the French leg of Jesse's book tour.",
        "Year": "2004"
    },
    {
        "Title": "Before Midnight",
        "Image": "https://m.media-amazon.com\/images\/M\/MV5BMjA5NzgxODE2NF5BMl5BanBnXkFtZTcwNTI1NTI0OQ@@._V1_SX300.jpg",
        "Genre": "Romance",
        "Description": "We meet Jesse and Celine nine years on in Greece. Almost two decades have passed since their first meeting on that train bound for Vienna.",
        "Year": "2013"
    },
    {
        "Title": "Dead Poets Society",
        "Image": "https://m.media-amazon.com\/images\/M\/MV5BMDYwNGVlY2ItMWYxMS00YjZiLWE5MTAtYWM5NWQ2ZWJjY2Q3XkEyXkFqcGc@._V1_SX300.jpg",
        "Genre": "Drama",
        "Description": "Maverick teacher John Keating returns in 1959 to the prestigious New England boys' boarding school where he was once a star student, using poetry to embolden his pupils to new heights of self-expression.",
        "Year": "1989"
    },
    {
        "Title": "Boyhood",
        "Image": "https://m.media-amazon.com\/images\/M\/MV5BMTYzNDc2MDc0N15BMl5BanBnXkFtZTgwOTcwMDQ5MTE@._V1_SX300.jpg",
        "Genre": "Drama",
        "Description": "The life of Mason, from early childhood to his arrival at college.",
        "Year": "2014"
    },
    {
        "Title": "Alien",
        "Image": "https://m.media-amazon.com\/images\/M\/MV5BN2NhMDk2MmEtZDQzOC00MmY5LThhYzAtMDdjZGFjOGZjMjdjXkEyXkFqcGc@._V1_SX300.jpg",
        "Genre": "Horror",
        "Description": "After investigating a mysterious transmission of unknown origin, the crew of a commercial spacecraft encounters a deadly lifeform.",
        "Year": "1979"
    }
]
export {movies}