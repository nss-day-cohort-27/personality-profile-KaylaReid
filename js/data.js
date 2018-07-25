const kayla = {
    general: {
        agree: [
            "Loyal and Hard-Working – Given a little time, this enthusiasm grows into loyalty – Defender personalities often form an emotional attachment to the ideas and organizations they’ve dedicated themselves to. Anything short of meeting their obligations with good, hard work fails their own expectations.",
            "Good Practical Skills – The best part is, Defenders have the practical sense to actually do something with all this altruism. If mundane, routine tasks are what need to be done, Defenders can see the beauty and harmony that they create, because they know that it helps them to care for their friends, family, and anyone else who needs it.",
            "Supportive – Defenders are the universal helpers, sharing their knowledge, experience, time and energy with anyone who needs it, and all the more so with friends and family. People with this personality type strive for win-win situations, choosing empathy over judgment whenever possible."
        ],
        whyIAgree: [
            "I have always been a hard worker, and enjoy a challenge",
            "I love to use logical thinking to solve everyday issues",
            "I like to help everyone I can whenever I can"
        ],
        disagree: [
            "Reluctant to Change – These challenges can be particularly hard to address since Defender personalities value traditions and history highly in their decisions. A situation sometimes needs to reach a breaking point before Defenders are persuaded by circumstance, or the strong personality of a loved one, to alter course.",
            "Too Altruistic – This is all compounded and reinforced by Defenders’ otherwise wonderful quality of altruism. Being such warm, good-natured people, Defenders are willing to let things slide, to believe that things will get better soon, to not burden others by accepting their offers of help, while their troubles mount unassisted.",
            "Take Things Too Personally – Defenders have trouble separating personal and impersonal situations – any situation is still an interaction between two people, after all – and any negativity from conflict or criticism can carry over from their professional to their personal lives, and back again."
        ], 
        whyIDisagree: [
            "I love change as I can easily get bored with the same old same old.",
            "I try to find a heatly balance of asking for help when needed.",
            "I disagree"
        ]
    },
    people: [
        {
            name: "Queen Elizabeth"
        },
        {
            name: "Beyonce"
        },
        {
            name: "Dr. Watson aka Sherlock Holmes"
        },
        {
            name: "Pam Beesly"
        }
    ],
    communication: { 
        sib: [
            "How would I communicate best with my little sib.",
            "I prefer to communicate verbally"
        ],
        instructors: [
            "How would I like my instructors to communicate with me.",
            "Vebally and with context behind what is being taught, I learn best when I know the why behind how things work, I also appreciate seeing practical/common uses for what we are learning"
        ],
        teammates: [
            "How would I like my teammates to communicate with me",
            "Kindly and with respect for the whole team"
        ]

    }
}

const saveDatabase = function (databaseObject, localStorageKey) {
    /* Convert the Object into a string. */
    let stringifiedDatabase = JSON.stringify(databaseObject)
    /* Create a key in local storage, and store the string
        version of your inventory database as the value */
    localStorage.setItem(localStorageKey, stringifiedDatabase)
}
saveDatabase(kayla, "kayla")
