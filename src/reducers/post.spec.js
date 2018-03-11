import post from "./post";
import * as types from "../constants/ActionTypes";
import { newPostMock, postsMock } from "../mocks/mock";

describe("reducers post", () => {
  it("should handle ADD_POST", () => {
    expect(
      post([], {
        type: types.ADD_POST,
        post: newPostMock
      })
    ).toEqual([
      {
        id: "6nlok",
        timestamp: 1468479767190,
        title: "Learning",
        body: "Just kidding.",
        author: "thingone",
        category: "redux"
      }
    ]);
  });

  it("should handle GET_ALL_POST_CATEGORY", () => {
    expect(
      post([], {
        type: types.GET_ALL_POST_CATEGORY,
        post: postsMock
      })
    ).toEqual([
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
    ]);
  });

  it("should handle GET_ALL_POST", () => {
    expect(
      post([], {
        type: types.GET_ALL_POST,
        post: postsMock
      })
    ).toEqual([
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
    ]);
  });

  it("should handle DELETE_POST", () => {
    expect(
      post(postsMock, {
        type: types.DELETE_POST,
        post: { id: "8xf0" }
      })
    ).toEqual([
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
    ]);
  });

  it("should handle EDIT POST", () => {
    expect(
      post(postsMock, {
        type: types.EDIT_POST,
        post: {
          id: "8xf0",
          title: "Udacity Brasil",
          body: "Everyone. something"
        }
      })
    ).toEqual([
      {
        id: "8xf0",
        timestamp: 1467166872634,
        title: "Udacity Brasil",
        body: "Everyone. something",
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
    ]);
  });

  it("should handle VOTE_POST", () => {
    expect(
      post(postsMock, {
        type: types.VOTE_POST,
        post: { id: "8xf0", voteScore: 1 }
      })
    ).toEqual([
      {
        id: "8xf0",
        timestamp: 1467166872634,
        title: "Udacity",
        body: "Everyone.",
        author: "thingtwo",
        category: "react",
        voteScore: 1,
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
    ]);
  });

  it("should handle DECREASE_COUNT", () => {
    expect(
      post(postsMock, {
        type: types.DECREASE_COUNT,
        id: "8xf0"
      })
    ).toEqual([
      {
        id: "8xf0",
        timestamp: 1467166872634,
        title: "Udacity",
        body: "Everyone.",
        author: "thingtwo",
        category: "react",
        voteScore: 6,
        deleted: false,
        commentCount: 1
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
    ]);
  });

  it("should handle DECREASE_COUNT", () => {
    expect(
      post(postsMock, {
        type: types.INCREASE_COUNT,
        id: "8xf0"
      })
    ).toEqual([
      {
        id: "8xf0",
        timestamp: 1467166872634,
        title: "Udacity",
        body: "Everyone.",
        author: "thingtwo",
        category: "react",
        voteScore: 6,
        deleted: false,
        commentCount: 3
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
    ]);
  });


  it("should handle SORT_POST / SCORE_SMALLER", () => {
    expect(
      post(postsMock, {
        type: types.SORT_POST,
        atributes: "SCORE_SMALLER"
      })
    ).toEqual([
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
      },
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
      }
    ]);
  });

  it("should handle SORT_POST / SCORE_BIGGER", () => {
    expect(
      post(postsMock, {
        type: types.SORT_POST,
        atributes: "SCORE_BIGGER"
      })
    ).toEqual([
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
    ]);
  });

  it("should handle SORT_POST / OLD_POST", () => {
    expect(
      post(postsMock, {
        type: types.SORT_POST,
        atributes: "OLD_POST"
      })
    ).toEqual([
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
    ]);
  });

  it("should handle SORT_POST / RECENT_POST", () => {
    expect(
      post(postsMock, {
        type: types.SORT_POST,
        atributes: "RECENT_POST"
      })
    ).toEqual([
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
      },
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
      }
    ]);
  });
});
