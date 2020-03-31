# jointapi
REST API for [thukyaw11's Joint](https://github.com/thukyaw11/joint)

Deployed at https://jointapi.now.sh

Endpoints:
- [GET /api/create](#get-apicreate)
- [GET /api/read](#get-apiread)
- [GET /api/update](#get-apiupdate)
- [GET /api/delete](#get-apidelete)

## GET /api/create
Creates a new post.
### Parameters
| Name          | Type     | Required | Default | Description                            |
| :-            | :-:      | :-:      | :-:     | :-                                     |
| `id`          | `Number` | yes      |         | Unique ID number of post               |
| `title`       | `String` | yes      |         | Post title                             |
| `author`      | `String` | yes      |         | Post author                            |
| `thumbnail`   | `String` | yes      |         | Preview thumbnail for post             |
| `description` | `String` | yes      |         | Post description                       |
| `tag`         | `String` | yes      |         | Post tag                               |
| `minRead`     | `Number` | no       | `null`  | Estimated time in minutes to read post |

## GET /api/read
Lists all posts.
### Parameters
| Name | Type | Required | Default | Description |
| :-   | :-:  | :-:      | :-:     | :-          |

## GET /api/update
Updates the contents of a post specified by `searchid`.
### Parameters
| Name          | Type      | Required | Default       | Description                            |
| :-            | :-:       | :-:      | :-:           | :-                                     |
| `searchid`    | `Number`  | yes      |               | ID of the post to be updated           |
| `title`       | `String`  | no       | \(unchanged\) | Post title                             |
| `author`      | `String`  | no       | \(unchanged\) | Post author                            |
| `thumbnail`   | `String`  | no       | \(unchanged\) | Preview thumbnail for post             |
| `description` | `String`  | no       | \(unchanged\) | Post description                       |
| `favouriate ` | `Boolean` | no       | \(unchanged\) | Post favourite flag                    |
| `tag`         | `String`  | no       | \(unchanged\) | Post tag                               |
| `minRead`     | `Number`  | no       | \(unchanged\) | Estimated time in minutes to read post |

## GET /api/delete
Deletes a post specified by `searchid`.
### Parameters
| Name       | Type     | Required | Default | Description                  |
| :-         | :-:      | :-:      | :-:     | :-                           |
| `searchid` | `Number `| yes      |         | ID of the post to be deleted |
