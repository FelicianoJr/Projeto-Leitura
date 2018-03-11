export const commentMock = {
  id: "894",
  parentId: "8xf0y6ziyjabvozdd253nd",
  timestamp: 1468166872634,
  body: "Hi there! I am a COMMENT.",
  author: "thingtwo"
};

export const commentsMock = [
  {
    id: "894",
    parentId: "80",
    timestamp: 1468166872634,
    body: "Hi there! I am a COMMENT.",
    author: "two",
    voteScore: 6
  },
  {
    id: "895",
    parentId: "80",
    timestamp: 1468166872634,
    body: "Hi there! I am a COMMENT.",
    author: "one",
    voteScore: 1
  }
];

export const postsMock = [
  {
    id: "8xf0",
    timestamp: 1467166872634,
    title: "Udacity",
    body: "Everyone.",
    author: "thingtwo",
    category: "react",
    voteScore: 6,
    deleted: false,
    commentCount: 2
  },
  {
    id: "6ni6",
    timestamp: 1468479767190,
    title: "Learn",
    body: "Just kidding.",
    author: "thingone",
    category: "redux",
    voteScore: -5,
    deleted: false,
    commentCount: 0
  }
];

export const newPostMock = {
  id: "6nlok",
  timestamp: 1468479767190,
  title: "Learning",
  body: "Just kidding.",
  author: "thingone",
  category: "redux"
};

export const categories = [
  {
    name: "react",
    path: "react"
  },
  {
    name: "redux",
    path: "redux"
  }
];
