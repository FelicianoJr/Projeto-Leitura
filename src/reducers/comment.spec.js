import comment from "./comment";
import * as types from "../constants/ActionTypes";

describe("reducers comment", () => {
  let commentsMock, commentMock;
  beforeEach(() => {
    commentMock = {
      id: "894",
      parentId: "8xf0y6ziyjabvozdd253nd",
      timestamp: 1468166872634,
      body: "Hi there! I am a COMMENT.",
      author: "thingtwo"
    };

    commentsMock = [
      {
        id: "894",
        parentId: "80",
        timestamp: 1468166872634,
        body: "Hi there! I am a COMMENT.",
        author: "two",
        voteScore: 6,
        deleted: false,
        parentDeleted: false
      },
      {
        id: "895",
        parentId: "80",
        timestamp: 1468166872634,
        body: "Hi there! I am a COMMENT.",
        author: "one",
        voteScore: 1,
        deleted: false,
        parentDeleted: false
      }
    ];
  });

  it("should handle DELETE_COMMENT", () => {
    expect(
      comment(commentsMock, {
        type: types.DELETE_COMMENT,
        comment: { id: "895", deleted: true }
      })
    ).toEqual([
      {
        id: "894",
        parentId: "80",
        timestamp: 1468166872634,
        body: "Hi there! I am a COMMENT.",
        author: "two",
        voteScore: 6,
        deleted: false,
        parentDeleted: false
      },
      {
        id: "895",
        parentId: "80",
        timestamp: 1468166872634,
        body: "Hi there! I am a COMMENT.",
        author: "one",
        voteScore: 1,
        deleted: true,
        parentDeleted: false
      }
    ]);
  });

  it("should handle PARENT_DELETE_COMMENT", () => {
    expect(
      comment(commentsMock, {
        type: types.PARENT_DELETE_COMMENT,
        comment: { id: "80", deleted: true }
      })
    ).toEqual([
      {
        id: "894",
        parentId: "80",
        timestamp: 1468166872634,
        body: "Hi there! I am a COMMENT.",
        author: "two",
        voteScore: 6,
        deleted: false,
        parentDeleted: true
      },
      {
        id: "895",
        parentId: "80",
        timestamp: 1468166872634,
        body: "Hi there! I am a COMMENT.",
        author: "one",
        voteScore: 1,
        deleted: false,
        parentDeleted: true
      }
    ]);
  });

  it("should handle VOTE_COMMENT", () => {
    expect(
      comment(commentsMock, {
        type: types.VOTE_COMMENT,
        comment: { id: "895", voteScore: 1 }
      })
    ).toEqual([
      {
        id: "894",
        parentId: "80",
        timestamp: 1468166872634,
        body: "Hi there! I am a COMMENT.",
        author: "two",
        voteScore: 6,
        deleted: false,
        parentDeleted: false
      },
      {
        id: "895",
        parentId: "80",
        timestamp: 1468166872634,
        body: "Hi there! I am a COMMENT.",
        author: "one",
        voteScore: 1,
        deleted: false,
        parentDeleted: false
      }
    ]);
  });

  it("should handle EDIT_COMMENT", () => {
    expect(
      comment(commentsMock, {
        type: types.EDIT_COMMENT,
        comment: { id: "895", timestamp: 1468166872634, body: "new edit" }
      })
    ).toEqual([
      {
        id: "894",
        parentId: "80",
        timestamp: 1468166872634,
        body: "Hi there! I am a COMMENT.",
        author: "two",
        voteScore: 6,
        deleted: false,
        parentDeleted: false
      },
      {
        id: "895",
        parentId: "80",
        timestamp: 1468166872634,
        body: "new edit",
        author: "one",
        voteScore: 1,
        deleted: false,
        parentDeleted: false
      }
    ]);
  });

  it("should handle GET_COMMENT_ID", () => {
    expect(
      comment([], {
        type: types.GET_COMMENT_ID,
        comment: commentsMock
      })
    ).toEqual([
      {
        id: "894",
        parentId: "80",
        timestamp: 1468166872634,
        body: "Hi there! I am a COMMENT.",
        author: "two",
        voteScore: 6,
        deleted: false,
        parentDeleted: false
      },
      {
        id: "895",
        parentId: "80",
        timestamp: 1468166872634,
        body: "Hi there! I am a COMMENT.",
        author: "one",
        voteScore: 1,
        deleted: false,
        parentDeleted: false
      }
    ]);
  });

  it("should handle GET_POST_ID_COMMENT", () => {
    expect(
      comment(commentsMock, {
        type: types.GET_POST_ID_COMMENT,
        comment: commentsMock
      })
    ).toEqual([
      {
        id: "894",
        parentId: "80",
        timestamp: 1468166872634,
        body: "Hi there! I am a COMMENT.",
        author: "two",
        voteScore: 6,
        deleted: false,
        parentDeleted: false
      },
      {
        id: "895",
        parentId: "80",
        timestamp: 1468166872634,
        body: "Hi there! I am a COMMENT.",
        author: "one",
        voteScore: 1,
        deleted: false,
        parentDeleted: false
      }
    ]);
  });
});
