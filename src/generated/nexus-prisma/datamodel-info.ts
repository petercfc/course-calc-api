export default {
  uniqueFieldsByModel: {
    Student: ['id'],
    Subject: ['id'],
    Degree: ['id'],
    Department: ['id'],
    Course: ['id']
  },
  clientPath: 'src\generated\prisma-client',
  schema: {
  "__schema": {
    "queryType": {
      "name": "Query"
    },
    "mutationType": {
      "name": "Mutation"
    },
    "subscriptionType": {
      "name": "Subscription"
    },
    "types": [
      {
        "kind": "OBJECT",
        "name": "Query",
        "description": null,
        "fields": [
          {
            "name": "student",
            "description": null,
            "args": [
              {
                "name": "where",
                "description": null,
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "StudentWhereUniqueInput",
                    "ofType": null
                  }
                },
                "defaultValue": null
              }
            ],
            "type": {
              "kind": "OBJECT",
              "name": "Student",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "students",
            "description": null,
            "args": [
              {
                "name": "where",
                "description": null,
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "StudentWhereInput",
                  "ofType": null
                },
                "defaultValue": null
              },
              {
                "name": "orderBy",
                "description": null,
                "type": {
                  "kind": "ENUM",
                  "name": "StudentOrderByInput",
                  "ofType": null
                },
                "defaultValue": null
              },
              {
                "name": "skip",
                "description": null,
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                },
                "defaultValue": null
              },
              {
                "name": "after",
                "description": null,
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                },
                "defaultValue": null
              },
              {
                "name": "before",
                "description": null,
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                },
                "defaultValue": null
              },
              {
                "name": "first",
                "description": null,
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                },
                "defaultValue": null
              },
              {
                "name": "last",
                "description": null,
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                },
                "defaultValue": null
              }
            ],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "LIST",
                "name": null,
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Student",
                  "ofType": null
                }
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "studentsConnection",
            "description": null,
            "args": [
              {
                "name": "where",
                "description": null,
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "StudentWhereInput",
                  "ofType": null
                },
                "defaultValue": null
              },
              {
                "name": "orderBy",
                "description": null,
                "type": {
                  "kind": "ENUM",
                  "name": "StudentOrderByInput",
                  "ofType": null
                },
                "defaultValue": null
              },
              {
                "name": "skip",
                "description": null,
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                },
                "defaultValue": null
              },
              {
                "name": "after",
                "description": null,
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                },
                "defaultValue": null
              },
              {
                "name": "before",
                "description": null,
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                },
                "defaultValue": null
              },
              {
                "name": "first",
                "description": null,
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                },
                "defaultValue": null
              },
              {
                "name": "last",
                "description": null,
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                },
                "defaultValue": null
              }
            ],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "OBJECT",
                "name": "StudentConnection",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "subject",
            "description": null,
            "args": [
              {
                "name": "where",
                "description": null,
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "SubjectWhereUniqueInput",
                    "ofType": null
                  }
                },
                "defaultValue": null
              }
            ],
            "type": {
              "kind": "OBJECT",
              "name": "Subject",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "subjects",
            "description": null,
            "args": [
              {
                "name": "where",
                "description": null,
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "SubjectWhereInput",
                  "ofType": null
                },
                "defaultValue": null
              },
              {
                "name": "orderBy",
                "description": null,
                "type": {
                  "kind": "ENUM",
                  "name": "SubjectOrderByInput",
                  "ofType": null
                },
                "defaultValue": null
              },
              {
                "name": "skip",
                "description": null,
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                },
                "defaultValue": null
              },
              {
                "name": "after",
                "description": null,
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                },
                "defaultValue": null
              },
              {
                "name": "before",
                "description": null,
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                },
                "defaultValue": null
              },
              {
                "name": "first",
                "description": null,
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                },
                "defaultValue": null
              },
              {
                "name": "last",
                "description": null,
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                },
                "defaultValue": null
              }
            ],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "LIST",
                "name": null,
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Subject",
                  "ofType": null
                }
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "subjectsConnection",
            "description": null,
            "args": [
              {
                "name": "where",
                "description": null,
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "SubjectWhereInput",
                  "ofType": null
                },
                "defaultValue": null
              },
              {
                "name": "orderBy",
                "description": null,
                "type": {
                  "kind": "ENUM",
                  "name": "SubjectOrderByInput",
                  "ofType": null
                },
                "defaultValue": null
              },
              {
                "name": "skip",
                "description": null,
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                },
                "defaultValue": null
              },
              {
                "name": "after",
                "description": null,
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                },
                "defaultValue": null
              },
              {
                "name": "before",
                "description": null,
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                },
                "defaultValue": null
              },
              {
                "name": "first",
                "description": null,
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                },
                "defaultValue": null
              },
              {
                "name": "last",
                "description": null,
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                },
                "defaultValue": null
              }
            ],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "OBJECT",
                "name": "SubjectConnection",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "degree",
            "description": null,
            "args": [
              {
                "name": "where",
                "description": null,
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "DegreeWhereUniqueInput",
                    "ofType": null
                  }
                },
                "defaultValue": null
              }
            ],
            "type": {
              "kind": "OBJECT",
              "name": "Degree",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "degrees",
            "description": null,
            "args": [
              {
                "name": "where",
                "description": null,
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "DegreeWhereInput",
                  "ofType": null
                },
                "defaultValue": null
              },
              {
                "name": "orderBy",
                "description": null,
                "type": {
                  "kind": "ENUM",
                  "name": "DegreeOrderByInput",
                  "ofType": null
                },
                "defaultValue": null
              },
              {
                "name": "skip",
                "description": null,
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                },
                "defaultValue": null
              },
              {
                "name": "after",
                "description": null,
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                },
                "defaultValue": null
              },
              {
                "name": "before",
                "description": null,
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                },
                "defaultValue": null
              },
              {
                "name": "first",
                "description": null,
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                },
                "defaultValue": null
              },
              {
                "name": "last",
                "description": null,
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                },
                "defaultValue": null
              }
            ],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "LIST",
                "name": null,
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Degree",
                  "ofType": null
                }
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "degreesConnection",
            "description": null,
            "args": [
              {
                "name": "where",
                "description": null,
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "DegreeWhereInput",
                  "ofType": null
                },
                "defaultValue": null
              },
              {
                "name": "orderBy",
                "description": null,
                "type": {
                  "kind": "ENUM",
                  "name": "DegreeOrderByInput",
                  "ofType": null
                },
                "defaultValue": null
              },
              {
                "name": "skip",
                "description": null,
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                },
                "defaultValue": null
              },
              {
                "name": "after",
                "description": null,
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                },
                "defaultValue": null
              },
              {
                "name": "before",
                "description": null,
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                },
                "defaultValue": null
              },
              {
                "name": "first",
                "description": null,
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                },
                "defaultValue": null
              },
              {
                "name": "last",
                "description": null,
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                },
                "defaultValue": null
              }
            ],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "OBJECT",
                "name": "DegreeConnection",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "department",
            "description": null,
            "args": [
              {
                "name": "where",
                "description": null,
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "DepartmentWhereUniqueInput",
                    "ofType": null
                  }
                },
                "defaultValue": null
              }
            ],
            "type": {
              "kind": "OBJECT",
              "name": "Department",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "departments",
            "description": null,
            "args": [
              {
                "name": "where",
                "description": null,
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "DepartmentWhereInput",
                  "ofType": null
                },
                "defaultValue": null
              },
              {
                "name": "orderBy",
                "description": null,
                "type": {
                  "kind": "ENUM",
                  "name": "DepartmentOrderByInput",
                  "ofType": null
                },
                "defaultValue": null
              },
              {
                "name": "skip",
                "description": null,
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                },
                "defaultValue": null
              },
              {
                "name": "after",
                "description": null,
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                },
                "defaultValue": null
              },
              {
                "name": "before",
                "description": null,
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                },
                "defaultValue": null
              },
              {
                "name": "first",
                "description": null,
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                },
                "defaultValue": null
              },
              {
                "name": "last",
                "description": null,
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                },
                "defaultValue": null
              }
            ],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "LIST",
                "name": null,
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Department",
                  "ofType": null
                }
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "departmentsConnection",
            "description": null,
            "args": [
              {
                "name": "where",
                "description": null,
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "DepartmentWhereInput",
                  "ofType": null
                },
                "defaultValue": null
              },
              {
                "name": "orderBy",
                "description": null,
                "type": {
                  "kind": "ENUM",
                  "name": "DepartmentOrderByInput",
                  "ofType": null
                },
                "defaultValue": null
              },
              {
                "name": "skip",
                "description": null,
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                },
                "defaultValue": null
              },
              {
                "name": "after",
                "description": null,
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                },
                "defaultValue": null
              },
              {
                "name": "before",
                "description": null,
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                },
                "defaultValue": null
              },
              {
                "name": "first",
                "description": null,
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                },
                "defaultValue": null
              },
              {
                "name": "last",
                "description": null,
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                },
                "defaultValue": null
              }
            ],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "OBJECT",
                "name": "DepartmentConnection",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "course",
            "description": null,
            "args": [
              {
                "name": "where",
                "description": null,
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "CourseWhereUniqueInput",
                    "ofType": null
                  }
                },
                "defaultValue": null
              }
            ],
            "type": {
              "kind": "OBJECT",
              "name": "Course",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "courses",
            "description": null,
            "args": [
              {
                "name": "where",
                "description": null,
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "CourseWhereInput",
                  "ofType": null
                },
                "defaultValue": null
              },
              {
                "name": "orderBy",
                "description": null,
                "type": {
                  "kind": "ENUM",
                  "name": "CourseOrderByInput",
                  "ofType": null
                },
                "defaultValue": null
              },
              {
                "name": "skip",
                "description": null,
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                },
                "defaultValue": null
              },
              {
                "name": "after",
                "description": null,
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                },
                "defaultValue": null
              },
              {
                "name": "before",
                "description": null,
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                },
                "defaultValue": null
              },
              {
                "name": "first",
                "description": null,
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                },
                "defaultValue": null
              },
              {
                "name": "last",
                "description": null,
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                },
                "defaultValue": null
              }
            ],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "LIST",
                "name": null,
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Course",
                  "ofType": null
                }
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "coursesConnection",
            "description": null,
            "args": [
              {
                "name": "where",
                "description": null,
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "CourseWhereInput",
                  "ofType": null
                },
                "defaultValue": null
              },
              {
                "name": "orderBy",
                "description": null,
                "type": {
                  "kind": "ENUM",
                  "name": "CourseOrderByInput",
                  "ofType": null
                },
                "defaultValue": null
              },
              {
                "name": "skip",
                "description": null,
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                },
                "defaultValue": null
              },
              {
                "name": "after",
                "description": null,
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                },
                "defaultValue": null
              },
              {
                "name": "before",
                "description": null,
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                },
                "defaultValue": null
              },
              {
                "name": "first",
                "description": null,
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                },
                "defaultValue": null
              },
              {
                "name": "last",
                "description": null,
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                },
                "defaultValue": null
              }
            ],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "OBJECT",
                "name": "CourseConnection",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "node",
            "description": null,
            "args": [
              {
                "name": "id",
                "description": null,
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "ID",
                    "ofType": null
                  }
                },
                "defaultValue": null
              }
            ],
            "type": {
              "kind": "INTERFACE",
              "name": "Node",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "StudentWhereUniqueInput",
        "description": null,
        "fields": null,
        "inputFields": [
          {
            "name": "id",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "ID",
              "ofType": null
            },
            "defaultValue": null
          }
        ],
        "interfaces": null,
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "SCALAR",
        "name": "ID",
        "description": "The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `\"4\"`) or integer (such as `4`) input value will be accepted as an ID.",
        "fields": null,
        "inputFields": null,
        "interfaces": null,
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "Student",
        "description": null,
        "fields": [
          {
            "name": "id",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "name",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "coursesPassed",
            "description": null,
            "args": [
              {
                "name": "where",
                "description": null,
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "CourseWhereInput",
                  "ofType": null
                },
                "defaultValue": null
              },
              {
                "name": "orderBy",
                "description": null,
                "type": {
                  "kind": "ENUM",
                  "name": "CourseOrderByInput",
                  "ofType": null
                },
                "defaultValue": null
              },
              {
                "name": "skip",
                "description": null,
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                },
                "defaultValue": null
              },
              {
                "name": "after",
                "description": null,
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                },
                "defaultValue": null
              },
              {
                "name": "before",
                "description": null,
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                },
                "defaultValue": null
              },
              {
                "name": "first",
                "description": null,
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                },
                "defaultValue": null
              },
              {
                "name": "last",
                "description": null,
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                },
                "defaultValue": null
              }
            ],
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Course",
                  "ofType": null
                }
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "enrolledDegree",
            "description": null,
            "args": [],
            "type": {
              "kind": "OBJECT",
              "name": "Degree",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "SCALAR",
        "name": "String",
        "description": "The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.",
        "fields": null,
        "inputFields": null,
        "interfaces": null,
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "CourseWhereInput",
        "description": null,
        "fields": null,
        "inputFields": [
          {
            "name": "id",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "ID",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "id_not",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "ID",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "id_in",
            "description": null,
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null
                }
              }
            },
            "defaultValue": null
          },
          {
            "name": "id_not_in",
            "description": null,
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null
                }
              }
            },
            "defaultValue": null
          },
          {
            "name": "id_lt",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "ID",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "id_lte",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "ID",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "id_gt",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "ID",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "id_gte",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "ID",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "id_contains",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "ID",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "id_not_contains",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "ID",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "id_starts_with",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "ID",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "id_not_starts_with",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "ID",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "id_ends_with",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "ID",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "id_not_ends_with",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "ID",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "name",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "name_not",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "name_in",
            "description": null,
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              }
            },
            "defaultValue": null
          },
          {
            "name": "name_not_in",
            "description": null,
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              }
            },
            "defaultValue": null
          },
          {
            "name": "name_lt",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "name_lte",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "name_gt",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "name_gte",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "name_contains",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "name_not_contains",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "name_starts_with",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "name_not_starts_with",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "name_ends_with",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "name_not_ends_with",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "number",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "number_not",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "number_in",
            "description": null,
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              }
            },
            "defaultValue": null
          },
          {
            "name": "number_not_in",
            "description": null,
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              }
            },
            "defaultValue": null
          },
          {
            "name": "number_lt",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "number_lte",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "number_gt",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "number_gte",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "number_contains",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "number_not_contains",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "number_starts_with",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "number_not_starts_with",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "number_ends_with",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "number_not_ends_with",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "level",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "level_not",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "level_in",
            "description": null,
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              }
            },
            "defaultValue": null
          },
          {
            "name": "level_not_in",
            "description": null,
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              }
            },
            "defaultValue": null
          },
          {
            "name": "level_lt",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "level_lte",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "level_gt",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "level_gte",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "credits",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "credits_not",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "credits_in",
            "description": null,
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              }
            },
            "defaultValue": null
          },
          {
            "name": "credits_not_in",
            "description": null,
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              }
            },
            "defaultValue": null
          },
          {
            "name": "credits_lt",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "credits_lte",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "credits_gt",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "credits_gte",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "subject",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "SubjectWhereInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "degree",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "DegreeWhereInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "department",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "DepartmentWhereInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "prerequisite",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "CourseWhereInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "AND",
            "description": null,
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "CourseWhereInput",
                  "ofType": null
                }
              }
            },
            "defaultValue": null
          },
          {
            "name": "OR",
            "description": null,
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "CourseWhereInput",
                  "ofType": null
                }
              }
            },
            "defaultValue": null
          },
          {
            "name": "NOT",
            "description": null,
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "CourseWhereInput",
                  "ofType": null
                }
              }
            },
            "defaultValue": null
          }
        ],
        "interfaces": null,
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "SCALAR",
        "name": "Int",
        "description": "The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. ",
        "fields": null,
        "inputFields": null,
        "interfaces": null,
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "SubjectWhereInput",
        "description": null,
        "fields": null,
        "inputFields": [
          {
            "name": "id",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "ID",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "id_not",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "ID",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "id_in",
            "description": null,
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null
                }
              }
            },
            "defaultValue": null
          },
          {
            "name": "id_not_in",
            "description": null,
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null
                }
              }
            },
            "defaultValue": null
          },
          {
            "name": "id_lt",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "ID",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "id_lte",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "ID",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "id_gt",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "ID",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "id_gte",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "ID",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "id_contains",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "ID",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "id_not_contains",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "ID",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "id_starts_with",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "ID",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "id_not_starts_with",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "ID",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "id_ends_with",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "ID",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "id_not_ends_with",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "ID",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "name",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "name_not",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "name_in",
            "description": null,
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              }
            },
            "defaultValue": null
          },
          {
            "name": "name_not_in",
            "description": null,
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              }
            },
            "defaultValue": null
          },
          {
            "name": "name_lt",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "name_lte",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "name_gt",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "name_gte",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "name_contains",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "name_not_contains",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "name_starts_with",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "name_not_starts_with",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "name_ends_with",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "name_not_ends_with",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "AND",
            "description": null,
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "SubjectWhereInput",
                  "ofType": null
                }
              }
            },
            "defaultValue": null
          },
          {
            "name": "OR",
            "description": null,
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "SubjectWhereInput",
                  "ofType": null
                }
              }
            },
            "defaultValue": null
          },
          {
            "name": "NOT",
            "description": null,
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "SubjectWhereInput",
                  "ofType": null
                }
              }
            },
            "defaultValue": null
          }
        ],
        "interfaces": null,
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "DegreeWhereInput",
        "description": null,
        "fields": null,
        "inputFields": [
          {
            "name": "id",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "ID",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "id_not",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "ID",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "id_in",
            "description": null,
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null
                }
              }
            },
            "defaultValue": null
          },
          {
            "name": "id_not_in",
            "description": null,
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null
                }
              }
            },
            "defaultValue": null
          },
          {
            "name": "id_lt",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "ID",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "id_lte",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "ID",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "id_gt",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "ID",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "id_gte",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "ID",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "id_contains",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "ID",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "id_not_contains",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "ID",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "id_starts_with",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "ID",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "id_not_starts_with",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "ID",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "id_ends_with",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "ID",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "id_not_ends_with",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "ID",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "name",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "name_not",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "name_in",
            "description": null,
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              }
            },
            "defaultValue": null
          },
          {
            "name": "name_not_in",
            "description": null,
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              }
            },
            "defaultValue": null
          },
          {
            "name": "name_lt",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "name_lte",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "name_gt",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "name_gte",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "name_contains",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "name_not_contains",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "name_starts_with",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "name_not_starts_with",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "name_ends_with",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "name_not_ends_with",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "requiredCredits",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "requiredCredits_not",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "requiredCredits_in",
            "description": null,
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              }
            },
            "defaultValue": null
          },
          {
            "name": "requiredCredits_not_in",
            "description": null,
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              }
            },
            "defaultValue": null
          },
          {
            "name": "requiredCredits_lt",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "requiredCredits_lte",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "requiredCredits_gt",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "requiredCredits_gte",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "AND",
            "description": null,
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "DegreeWhereInput",
                  "ofType": null
                }
              }
            },
            "defaultValue": null
          },
          {
            "name": "OR",
            "description": null,
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "DegreeWhereInput",
                  "ofType": null
                }
              }
            },
            "defaultValue": null
          },
          {
            "name": "NOT",
            "description": null,
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "DegreeWhereInput",
                  "ofType": null
                }
              }
            },
            "defaultValue": null
          }
        ],
        "interfaces": null,
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "DepartmentWhereInput",
        "description": null,
        "fields": null,
        "inputFields": [
          {
            "name": "id",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "ID",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "id_not",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "ID",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "id_in",
            "description": null,
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null
                }
              }
            },
            "defaultValue": null
          },
          {
            "name": "id_not_in",
            "description": null,
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null
                }
              }
            },
            "defaultValue": null
          },
          {
            "name": "id_lt",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "ID",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "id_lte",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "ID",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "id_gt",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "ID",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "id_gte",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "ID",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "id_contains",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "ID",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "id_not_contains",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "ID",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "id_starts_with",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "ID",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "id_not_starts_with",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "ID",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "id_ends_with",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "ID",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "id_not_ends_with",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "ID",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "name",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "name_not",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "name_in",
            "description": null,
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              }
            },
            "defaultValue": null
          },
          {
            "name": "name_not_in",
            "description": null,
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              }
            },
            "defaultValue": null
          },
          {
            "name": "name_lt",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "name_lte",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "name_gt",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "name_gte",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "name_contains",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "name_not_contains",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "name_starts_with",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "name_not_starts_with",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "name_ends_with",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "name_not_ends_with",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "AND",
            "description": null,
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "DepartmentWhereInput",
                  "ofType": null
                }
              }
            },
            "defaultValue": null
          },
          {
            "name": "OR",
            "description": null,
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "DepartmentWhereInput",
                  "ofType": null
                }
              }
            },
            "defaultValue": null
          },
          {
            "name": "NOT",
            "description": null,
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "DepartmentWhereInput",
                  "ofType": null
                }
              }
            },
            "defaultValue": null
          }
        ],
        "interfaces": null,
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "ENUM",
        "name": "CourseOrderByInput",
        "description": null,
        "fields": null,
        "inputFields": null,
        "interfaces": null,
        "enumValues": [
          {
            "name": "id_ASC",
            "description": null,
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "id_DESC",
            "description": null,
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "name_ASC",
            "description": null,
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "name_DESC",
            "description": null,
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "number_ASC",
            "description": null,
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "number_DESC",
            "description": null,
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "level_ASC",
            "description": null,
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "level_DESC",
            "description": null,
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "credits_ASC",
            "description": null,
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "credits_DESC",
            "description": null,
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "createdAt_ASC",
            "description": null,
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "createdAt_DESC",
            "description": null,
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "updatedAt_ASC",
            "description": null,
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "updatedAt_DESC",
            "description": null,
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "Course",
        "description": null,
        "fields": [
          {
            "name": "id",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "name",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "number",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "level",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "credits",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "subject",
            "description": null,
            "args": [],
            "type": {
              "kind": "OBJECT",
              "name": "Subject",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "degree",
            "description": null,
            "args": [],
            "type": {
              "kind": "OBJECT",
              "name": "Degree",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "department",
            "description": null,
            "args": [],
            "type": {
              "kind": "OBJECT",
              "name": "Department",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "prerequisite",
            "description": null,
            "args": [],
            "type": {
              "kind": "OBJECT",
              "name": "Course",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "Subject",
        "description": null,
        "fields": [
          {
            "name": "id",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "name",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "Degree",
        "description": null,
        "fields": [
          {
            "name": "id",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "name",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "requiredCredits",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "Department",
        "description": null,
        "fields": [
          {
            "name": "id",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "name",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "StudentWhereInput",
        "description": null,
        "fields": null,
        "inputFields": [
          {
            "name": "id",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "ID",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "id_not",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "ID",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "id_in",
            "description": null,
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null
                }
              }
            },
            "defaultValue": null
          },
          {
            "name": "id_not_in",
            "description": null,
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null
                }
              }
            },
            "defaultValue": null
          },
          {
            "name": "id_lt",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "ID",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "id_lte",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "ID",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "id_gt",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "ID",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "id_gte",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "ID",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "id_contains",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "ID",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "id_not_contains",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "ID",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "id_starts_with",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "ID",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "id_not_starts_with",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "ID",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "id_ends_with",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "ID",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "id_not_ends_with",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "ID",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "name",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "name_not",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "name_in",
            "description": null,
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              }
            },
            "defaultValue": null
          },
          {
            "name": "name_not_in",
            "description": null,
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              }
            },
            "defaultValue": null
          },
          {
            "name": "name_lt",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "name_lte",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "name_gt",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "name_gte",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "name_contains",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "name_not_contains",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "name_starts_with",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "name_not_starts_with",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "name_ends_with",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "name_not_ends_with",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "coursesPassed_every",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "CourseWhereInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "coursesPassed_some",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "CourseWhereInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "coursesPassed_none",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "CourseWhereInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "enrolledDegree",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "DegreeWhereInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "AND",
            "description": null,
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "StudentWhereInput",
                  "ofType": null
                }
              }
            },
            "defaultValue": null
          },
          {
            "name": "OR",
            "description": null,
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "StudentWhereInput",
                  "ofType": null
                }
              }
            },
            "defaultValue": null
          },
          {
            "name": "NOT",
            "description": null,
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "StudentWhereInput",
                  "ofType": null
                }
              }
            },
            "defaultValue": null
          }
        ],
        "interfaces": null,
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "ENUM",
        "name": "StudentOrderByInput",
        "description": null,
        "fields": null,
        "inputFields": null,
        "interfaces": null,
        "enumValues": [
          {
            "name": "id_ASC",
            "description": null,
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "id_DESC",
            "description": null,
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "name_ASC",
            "description": null,
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "name_DESC",
            "description": null,
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "createdAt_ASC",
            "description": null,
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "createdAt_DESC",
            "description": null,
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "updatedAt_ASC",
            "description": null,
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "updatedAt_DESC",
            "description": null,
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "StudentConnection",
        "description": null,
        "fields": [
          {
            "name": "pageInfo",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "OBJECT",
                "name": "PageInfo",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "edges",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "LIST",
                "name": null,
                "ofType": {
                  "kind": "OBJECT",
                  "name": "StudentEdge",
                  "ofType": null
                }
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "aggregate",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "OBJECT",
                "name": "AggregateStudent",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "PageInfo",
        "description": null,
        "fields": [
          {
            "name": "hasNextPage",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "hasPreviousPage",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "startCursor",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "endCursor",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "SCALAR",
        "name": "Boolean",
        "description": "The `Boolean` scalar type represents `true` or `false`.",
        "fields": null,
        "inputFields": null,
        "interfaces": null,
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "StudentEdge",
        "description": null,
        "fields": [
          {
            "name": "node",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "OBJECT",
                "name": "Student",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "cursor",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "AggregateStudent",
        "description": null,
        "fields": [
          {
            "name": "count",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "SubjectWhereUniqueInput",
        "description": null,
        "fields": null,
        "inputFields": [
          {
            "name": "id",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "ID",
              "ofType": null
            },
            "defaultValue": null
          }
        ],
        "interfaces": null,
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "ENUM",
        "name": "SubjectOrderByInput",
        "description": null,
        "fields": null,
        "inputFields": null,
        "interfaces": null,
        "enumValues": [
          {
            "name": "id_ASC",
            "description": null,
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "id_DESC",
            "description": null,
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "name_ASC",
            "description": null,
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "name_DESC",
            "description": null,
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "createdAt_ASC",
            "description": null,
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "createdAt_DESC",
            "description": null,
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "updatedAt_ASC",
            "description": null,
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "updatedAt_DESC",
            "description": null,
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "SubjectConnection",
        "description": null,
        "fields": [
          {
            "name": "pageInfo",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "OBJECT",
                "name": "PageInfo",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "edges",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "LIST",
                "name": null,
                "ofType": {
                  "kind": "OBJECT",
                  "name": "SubjectEdge",
                  "ofType": null
                }
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "aggregate",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "OBJECT",
                "name": "AggregateSubject",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "SubjectEdge",
        "description": null,
        "fields": [
          {
            "name": "node",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "OBJECT",
                "name": "Subject",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "cursor",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "AggregateSubject",
        "description": null,
        "fields": [
          {
            "name": "count",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "DegreeWhereUniqueInput",
        "description": null,
        "fields": null,
        "inputFields": [
          {
            "name": "id",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "ID",
              "ofType": null
            },
            "defaultValue": null
          }
        ],
        "interfaces": null,
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "ENUM",
        "name": "DegreeOrderByInput",
        "description": null,
        "fields": null,
        "inputFields": null,
        "interfaces": null,
        "enumValues": [
          {
            "name": "id_ASC",
            "description": null,
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "id_DESC",
            "description": null,
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "name_ASC",
            "description": null,
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "name_DESC",
            "description": null,
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "requiredCredits_ASC",
            "description": null,
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "requiredCredits_DESC",
            "description": null,
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "createdAt_ASC",
            "description": null,
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "createdAt_DESC",
            "description": null,
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "updatedAt_ASC",
            "description": null,
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "updatedAt_DESC",
            "description": null,
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "DegreeConnection",
        "description": null,
        "fields": [
          {
            "name": "pageInfo",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "OBJECT",
                "name": "PageInfo",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "edges",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "LIST",
                "name": null,
                "ofType": {
                  "kind": "OBJECT",
                  "name": "DegreeEdge",
                  "ofType": null
                }
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "aggregate",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "OBJECT",
                "name": "AggregateDegree",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "DegreeEdge",
        "description": null,
        "fields": [
          {
            "name": "node",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "OBJECT",
                "name": "Degree",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "cursor",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "AggregateDegree",
        "description": null,
        "fields": [
          {
            "name": "count",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "DepartmentWhereUniqueInput",
        "description": null,
        "fields": null,
        "inputFields": [
          {
            "name": "id",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "ID",
              "ofType": null
            },
            "defaultValue": null
          }
        ],
        "interfaces": null,
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "ENUM",
        "name": "DepartmentOrderByInput",
        "description": null,
        "fields": null,
        "inputFields": null,
        "interfaces": null,
        "enumValues": [
          {
            "name": "id_ASC",
            "description": null,
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "id_DESC",
            "description": null,
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "name_ASC",
            "description": null,
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "name_DESC",
            "description": null,
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "createdAt_ASC",
            "description": null,
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "createdAt_DESC",
            "description": null,
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "updatedAt_ASC",
            "description": null,
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "updatedAt_DESC",
            "description": null,
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "DepartmentConnection",
        "description": null,
        "fields": [
          {
            "name": "pageInfo",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "OBJECT",
                "name": "PageInfo",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "edges",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "LIST",
                "name": null,
                "ofType": {
                  "kind": "OBJECT",
                  "name": "DepartmentEdge",
                  "ofType": null
                }
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "aggregate",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "OBJECT",
                "name": "AggregateDepartment",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "DepartmentEdge",
        "description": null,
        "fields": [
          {
            "name": "node",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "OBJECT",
                "name": "Department",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "cursor",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "AggregateDepartment",
        "description": null,
        "fields": [
          {
            "name": "count",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "CourseWhereUniqueInput",
        "description": null,
        "fields": null,
        "inputFields": [
          {
            "name": "id",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "ID",
              "ofType": null
            },
            "defaultValue": null
          }
        ],
        "interfaces": null,
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "CourseConnection",
        "description": null,
        "fields": [
          {
            "name": "pageInfo",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "OBJECT",
                "name": "PageInfo",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "edges",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "LIST",
                "name": null,
                "ofType": {
                  "kind": "OBJECT",
                  "name": "CourseEdge",
                  "ofType": null
                }
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "aggregate",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "OBJECT",
                "name": "AggregateCourse",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "CourseEdge",
        "description": null,
        "fields": [
          {
            "name": "node",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "OBJECT",
                "name": "Course",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "cursor",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "AggregateCourse",
        "description": null,
        "fields": [
          {
            "name": "count",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "INTERFACE",
        "name": "Node",
        "description": null,
        "fields": [
          {
            "name": "id",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": null,
        "enumValues": null,
        "possibleTypes": []
      },
      {
        "kind": "OBJECT",
        "name": "Mutation",
        "description": null,
        "fields": [
          {
            "name": "createStudent",
            "description": null,
            "args": [
              {
                "name": "data",
                "description": null,
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "StudentCreateInput",
                    "ofType": null
                  }
                },
                "defaultValue": null
              }
            ],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "OBJECT",
                "name": "Student",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "updateStudent",
            "description": null,
            "args": [
              {
                "name": "data",
                "description": null,
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "StudentUpdateInput",
                    "ofType": null
                  }
                },
                "defaultValue": null
              },
              {
                "name": "where",
                "description": null,
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "StudentWhereUniqueInput",
                    "ofType": null
                  }
                },
                "defaultValue": null
              }
            ],
            "type": {
              "kind": "OBJECT",
              "name": "Student",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "updateManyStudents",
            "description": null,
            "args": [
              {
                "name": "data",
                "description": null,
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "StudentUpdateManyMutationInput",
                    "ofType": null
                  }
                },
                "defaultValue": null
              },
              {
                "name": "where",
                "description": null,
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "StudentWhereInput",
                  "ofType": null
                },
                "defaultValue": null
              }
            ],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "OBJECT",
                "name": "BatchPayload",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "upsertStudent",
            "description": null,
            "args": [
              {
                "name": "where",
                "description": null,
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "StudentWhereUniqueInput",
                    "ofType": null
                  }
                },
                "defaultValue": null
              },
              {
                "name": "create",
                "description": null,
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "StudentCreateInput",
                    "ofType": null
                  }
                },
                "defaultValue": null
              },
              {
                "name": "update",
                "description": null,
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "StudentUpdateInput",
                    "ofType": null
                  }
                },
                "defaultValue": null
              }
            ],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "OBJECT",
                "name": "Student",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "deleteStudent",
            "description": null,
            "args": [
              {
                "name": "where",
                "description": null,
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "StudentWhereUniqueInput",
                    "ofType": null
                  }
                },
                "defaultValue": null
              }
            ],
            "type": {
              "kind": "OBJECT",
              "name": "Student",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "deleteManyStudents",
            "description": null,
            "args": [
              {
                "name": "where",
                "description": null,
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "StudentWhereInput",
                  "ofType": null
                },
                "defaultValue": null
              }
            ],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "OBJECT",
                "name": "BatchPayload",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "createSubject",
            "description": null,
            "args": [
              {
                "name": "data",
                "description": null,
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "SubjectCreateInput",
                    "ofType": null
                  }
                },
                "defaultValue": null
              }
            ],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "OBJECT",
                "name": "Subject",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "updateSubject",
            "description": null,
            "args": [
              {
                "name": "data",
                "description": null,
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "SubjectUpdateInput",
                    "ofType": null
                  }
                },
                "defaultValue": null
              },
              {
                "name": "where",
                "description": null,
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "SubjectWhereUniqueInput",
                    "ofType": null
                  }
                },
                "defaultValue": null
              }
            ],
            "type": {
              "kind": "OBJECT",
              "name": "Subject",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "updateManySubjects",
            "description": null,
            "args": [
              {
                "name": "data",
                "description": null,
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "SubjectUpdateManyMutationInput",
                    "ofType": null
                  }
                },
                "defaultValue": null
              },
              {
                "name": "where",
                "description": null,
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "SubjectWhereInput",
                  "ofType": null
                },
                "defaultValue": null
              }
            ],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "OBJECT",
                "name": "BatchPayload",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "upsertSubject",
            "description": null,
            "args": [
              {
                "name": "where",
                "description": null,
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "SubjectWhereUniqueInput",
                    "ofType": null
                  }
                },
                "defaultValue": null
              },
              {
                "name": "create",
                "description": null,
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "SubjectCreateInput",
                    "ofType": null
                  }
                },
                "defaultValue": null
              },
              {
                "name": "update",
                "description": null,
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "SubjectUpdateInput",
                    "ofType": null
                  }
                },
                "defaultValue": null
              }
            ],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "OBJECT",
                "name": "Subject",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "deleteSubject",
            "description": null,
            "args": [
              {
                "name": "where",
                "description": null,
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "SubjectWhereUniqueInput",
                    "ofType": null
                  }
                },
                "defaultValue": null
              }
            ],
            "type": {
              "kind": "OBJECT",
              "name": "Subject",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "deleteManySubjects",
            "description": null,
            "args": [
              {
                "name": "where",
                "description": null,
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "SubjectWhereInput",
                  "ofType": null
                },
                "defaultValue": null
              }
            ],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "OBJECT",
                "name": "BatchPayload",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "createDegree",
            "description": null,
            "args": [
              {
                "name": "data",
                "description": null,
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "DegreeCreateInput",
                    "ofType": null
                  }
                },
                "defaultValue": null
              }
            ],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "OBJECT",
                "name": "Degree",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "updateDegree",
            "description": null,
            "args": [
              {
                "name": "data",
                "description": null,
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "DegreeUpdateInput",
                    "ofType": null
                  }
                },
                "defaultValue": null
              },
              {
                "name": "where",
                "description": null,
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "DegreeWhereUniqueInput",
                    "ofType": null
                  }
                },
                "defaultValue": null
              }
            ],
            "type": {
              "kind": "OBJECT",
              "name": "Degree",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "updateManyDegrees",
            "description": null,
            "args": [
              {
                "name": "data",
                "description": null,
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "DegreeUpdateManyMutationInput",
                    "ofType": null
                  }
                },
                "defaultValue": null
              },
              {
                "name": "where",
                "description": null,
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "DegreeWhereInput",
                  "ofType": null
                },
                "defaultValue": null
              }
            ],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "OBJECT",
                "name": "BatchPayload",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "upsertDegree",
            "description": null,
            "args": [
              {
                "name": "where",
                "description": null,
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "DegreeWhereUniqueInput",
                    "ofType": null
                  }
                },
                "defaultValue": null
              },
              {
                "name": "create",
                "description": null,
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "DegreeCreateInput",
                    "ofType": null
                  }
                },
                "defaultValue": null
              },
              {
                "name": "update",
                "description": null,
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "DegreeUpdateInput",
                    "ofType": null
                  }
                },
                "defaultValue": null
              }
            ],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "OBJECT",
                "name": "Degree",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "deleteDegree",
            "description": null,
            "args": [
              {
                "name": "where",
                "description": null,
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "DegreeWhereUniqueInput",
                    "ofType": null
                  }
                },
                "defaultValue": null
              }
            ],
            "type": {
              "kind": "OBJECT",
              "name": "Degree",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "deleteManyDegrees",
            "description": null,
            "args": [
              {
                "name": "where",
                "description": null,
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "DegreeWhereInput",
                  "ofType": null
                },
                "defaultValue": null
              }
            ],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "OBJECT",
                "name": "BatchPayload",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "createDepartment",
            "description": null,
            "args": [
              {
                "name": "data",
                "description": null,
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "DepartmentCreateInput",
                    "ofType": null
                  }
                },
                "defaultValue": null
              }
            ],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "OBJECT",
                "name": "Department",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "updateDepartment",
            "description": null,
            "args": [
              {
                "name": "data",
                "description": null,
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "DepartmentUpdateInput",
                    "ofType": null
                  }
                },
                "defaultValue": null
              },
              {
                "name": "where",
                "description": null,
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "DepartmentWhereUniqueInput",
                    "ofType": null
                  }
                },
                "defaultValue": null
              }
            ],
            "type": {
              "kind": "OBJECT",
              "name": "Department",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "updateManyDepartments",
            "description": null,
            "args": [
              {
                "name": "data",
                "description": null,
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "DepartmentUpdateManyMutationInput",
                    "ofType": null
                  }
                },
                "defaultValue": null
              },
              {
                "name": "where",
                "description": null,
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "DepartmentWhereInput",
                  "ofType": null
                },
                "defaultValue": null
              }
            ],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "OBJECT",
                "name": "BatchPayload",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "upsertDepartment",
            "description": null,
            "args": [
              {
                "name": "where",
                "description": null,
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "DepartmentWhereUniqueInput",
                    "ofType": null
                  }
                },
                "defaultValue": null
              },
              {
                "name": "create",
                "description": null,
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "DepartmentCreateInput",
                    "ofType": null
                  }
                },
                "defaultValue": null
              },
              {
                "name": "update",
                "description": null,
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "DepartmentUpdateInput",
                    "ofType": null
                  }
                },
                "defaultValue": null
              }
            ],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "OBJECT",
                "name": "Department",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "deleteDepartment",
            "description": null,
            "args": [
              {
                "name": "where",
                "description": null,
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "DepartmentWhereUniqueInput",
                    "ofType": null
                  }
                },
                "defaultValue": null
              }
            ],
            "type": {
              "kind": "OBJECT",
              "name": "Department",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "deleteManyDepartments",
            "description": null,
            "args": [
              {
                "name": "where",
                "description": null,
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "DepartmentWhereInput",
                  "ofType": null
                },
                "defaultValue": null
              }
            ],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "OBJECT",
                "name": "BatchPayload",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "createCourse",
            "description": null,
            "args": [
              {
                "name": "data",
                "description": null,
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "CourseCreateInput",
                    "ofType": null
                  }
                },
                "defaultValue": null
              }
            ],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "OBJECT",
                "name": "Course",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "updateCourse",
            "description": null,
            "args": [
              {
                "name": "data",
                "description": null,
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "CourseUpdateInput",
                    "ofType": null
                  }
                },
                "defaultValue": null
              },
              {
                "name": "where",
                "description": null,
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "CourseWhereUniqueInput",
                    "ofType": null
                  }
                },
                "defaultValue": null
              }
            ],
            "type": {
              "kind": "OBJECT",
              "name": "Course",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "updateManyCourses",
            "description": null,
            "args": [
              {
                "name": "data",
                "description": null,
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "CourseUpdateManyMutationInput",
                    "ofType": null
                  }
                },
                "defaultValue": null
              },
              {
                "name": "where",
                "description": null,
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "CourseWhereInput",
                  "ofType": null
                },
                "defaultValue": null
              }
            ],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "OBJECT",
                "name": "BatchPayload",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "upsertCourse",
            "description": null,
            "args": [
              {
                "name": "where",
                "description": null,
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "CourseWhereUniqueInput",
                    "ofType": null
                  }
                },
                "defaultValue": null
              },
              {
                "name": "create",
                "description": null,
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "CourseCreateInput",
                    "ofType": null
                  }
                },
                "defaultValue": null
              },
              {
                "name": "update",
                "description": null,
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "CourseUpdateInput",
                    "ofType": null
                  }
                },
                "defaultValue": null
              }
            ],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "OBJECT",
                "name": "Course",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "deleteCourse",
            "description": null,
            "args": [
              {
                "name": "where",
                "description": null,
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "CourseWhereUniqueInput",
                    "ofType": null
                  }
                },
                "defaultValue": null
              }
            ],
            "type": {
              "kind": "OBJECT",
              "name": "Course",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "deleteManyCourses",
            "description": null,
            "args": [
              {
                "name": "where",
                "description": null,
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "CourseWhereInput",
                  "ofType": null
                },
                "defaultValue": null
              }
            ],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "OBJECT",
                "name": "BatchPayload",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "StudentCreateInput",
        "description": null,
        "fields": null,
        "inputFields": [
          {
            "name": "name",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "coursesPassed",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "CourseCreateManyInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "enrolledDegree",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "DegreeCreateOneInput",
              "ofType": null
            },
            "defaultValue": null
          }
        ],
        "interfaces": null,
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "CourseCreateManyInput",
        "description": null,
        "fields": null,
        "inputFields": [
          {
            "name": "create",
            "description": null,
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "CourseCreateInput",
                  "ofType": null
                }
              }
            },
            "defaultValue": null
          },
          {
            "name": "connect",
            "description": null,
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "CourseWhereUniqueInput",
                  "ofType": null
                }
              }
            },
            "defaultValue": null
          }
        ],
        "interfaces": null,
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "CourseCreateInput",
        "description": null,
        "fields": null,
        "inputFields": [
          {
            "name": "name",
            "description": null,
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "defaultValue": null
          },
          {
            "name": "number",
            "description": null,
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "defaultValue": null
          },
          {
            "name": "level",
            "description": null,
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            },
            "defaultValue": null
          },
          {
            "name": "credits",
            "description": null,
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            },
            "defaultValue": null
          },
          {
            "name": "subject",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "SubjectCreateOneInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "degree",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "DegreeCreateOneInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "department",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "DepartmentCreateOneInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "prerequisite",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "CourseCreateOneInput",
              "ofType": null
            },
            "defaultValue": null
          }
        ],
        "interfaces": null,
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "SubjectCreateOneInput",
        "description": null,
        "fields": null,
        "inputFields": [
          {
            "name": "create",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "SubjectCreateInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "connect",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "SubjectWhereUniqueInput",
              "ofType": null
            },
            "defaultValue": null
          }
        ],
        "interfaces": null,
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "SubjectCreateInput",
        "description": null,
        "fields": null,
        "inputFields": [
          {
            "name": "name",
            "description": null,
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "defaultValue": null
          }
        ],
        "interfaces": null,
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "DegreeCreateOneInput",
        "description": null,
        "fields": null,
        "inputFields": [
          {
            "name": "create",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "DegreeCreateInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "connect",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "DegreeWhereUniqueInput",
              "ofType": null
            },
            "defaultValue": null
          }
        ],
        "interfaces": null,
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "DegreeCreateInput",
        "description": null,
        "fields": null,
        "inputFields": [
          {
            "name": "name",
            "description": null,
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "defaultValue": null
          },
          {
            "name": "requiredCredits",
            "description": null,
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            },
            "defaultValue": null
          }
        ],
        "interfaces": null,
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "DepartmentCreateOneInput",
        "description": null,
        "fields": null,
        "inputFields": [
          {
            "name": "create",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "DepartmentCreateInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "connect",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "DepartmentWhereUniqueInput",
              "ofType": null
            },
            "defaultValue": null
          }
        ],
        "interfaces": null,
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "DepartmentCreateInput",
        "description": null,
        "fields": null,
        "inputFields": [
          {
            "name": "name",
            "description": null,
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "defaultValue": null
          }
        ],
        "interfaces": null,
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "CourseCreateOneInput",
        "description": null,
        "fields": null,
        "inputFields": [
          {
            "name": "create",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "CourseCreateInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "connect",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "CourseWhereUniqueInput",
              "ofType": null
            },
            "defaultValue": null
          }
        ],
        "interfaces": null,
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "StudentUpdateInput",
        "description": null,
        "fields": null,
        "inputFields": [
          {
            "name": "name",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "coursesPassed",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "CourseUpdateManyInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "enrolledDegree",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "DegreeUpdateOneInput",
              "ofType": null
            },
            "defaultValue": null
          }
        ],
        "interfaces": null,
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "CourseUpdateManyInput",
        "description": null,
        "fields": null,
        "inputFields": [
          {
            "name": "create",
            "description": null,
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "CourseCreateInput",
                  "ofType": null
                }
              }
            },
            "defaultValue": null
          },
          {
            "name": "update",
            "description": null,
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "CourseUpdateWithWhereUniqueNestedInput",
                  "ofType": null
                }
              }
            },
            "defaultValue": null
          },
          {
            "name": "upsert",
            "description": null,
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "CourseUpsertWithWhereUniqueNestedInput",
                  "ofType": null
                }
              }
            },
            "defaultValue": null
          },
          {
            "name": "delete",
            "description": null,
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "CourseWhereUniqueInput",
                  "ofType": null
                }
              }
            },
            "defaultValue": null
          },
          {
            "name": "connect",
            "description": null,
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "CourseWhereUniqueInput",
                  "ofType": null
                }
              }
            },
            "defaultValue": null
          },
          {
            "name": "set",
            "description": null,
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "CourseWhereUniqueInput",
                  "ofType": null
                }
              }
            },
            "defaultValue": null
          },
          {
            "name": "disconnect",
            "description": null,
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "CourseWhereUniqueInput",
                  "ofType": null
                }
              }
            },
            "defaultValue": null
          },
          {
            "name": "deleteMany",
            "description": null,
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "CourseScalarWhereInput",
                  "ofType": null
                }
              }
            },
            "defaultValue": null
          },
          {
            "name": "updateMany",
            "description": null,
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "CourseUpdateManyWithWhereNestedInput",
                  "ofType": null
                }
              }
            },
            "defaultValue": null
          }
        ],
        "interfaces": null,
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "CourseUpdateWithWhereUniqueNestedInput",
        "description": null,
        "fields": null,
        "inputFields": [
          {
            "name": "where",
            "description": null,
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "CourseWhereUniqueInput",
                "ofType": null
              }
            },
            "defaultValue": null
          },
          {
            "name": "data",
            "description": null,
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "CourseUpdateDataInput",
                "ofType": null
              }
            },
            "defaultValue": null
          }
        ],
        "interfaces": null,
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "CourseUpdateDataInput",
        "description": null,
        "fields": null,
        "inputFields": [
          {
            "name": "name",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "number",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "level",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "credits",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "subject",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "SubjectUpdateOneInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "degree",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "DegreeUpdateOneInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "department",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "DepartmentUpdateOneInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "prerequisite",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "CourseUpdateOneInput",
              "ofType": null
            },
            "defaultValue": null
          }
        ],
        "interfaces": null,
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "SubjectUpdateOneInput",
        "description": null,
        "fields": null,
        "inputFields": [
          {
            "name": "create",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "SubjectCreateInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "update",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "SubjectUpdateDataInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "upsert",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "SubjectUpsertNestedInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "delete",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "disconnect",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "connect",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "SubjectWhereUniqueInput",
              "ofType": null
            },
            "defaultValue": null
          }
        ],
        "interfaces": null,
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "SubjectUpdateDataInput",
        "description": null,
        "fields": null,
        "inputFields": [
          {
            "name": "name",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "defaultValue": null
          }
        ],
        "interfaces": null,
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "SubjectUpsertNestedInput",
        "description": null,
        "fields": null,
        "inputFields": [
          {
            "name": "update",
            "description": null,
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "SubjectUpdateDataInput",
                "ofType": null
              }
            },
            "defaultValue": null
          },
          {
            "name": "create",
            "description": null,
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "SubjectCreateInput",
                "ofType": null
              }
            },
            "defaultValue": null
          }
        ],
        "interfaces": null,
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "DegreeUpdateOneInput",
        "description": null,
        "fields": null,
        "inputFields": [
          {
            "name": "create",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "DegreeCreateInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "update",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "DegreeUpdateDataInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "upsert",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "DegreeUpsertNestedInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "delete",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "disconnect",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "connect",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "DegreeWhereUniqueInput",
              "ofType": null
            },
            "defaultValue": null
          }
        ],
        "interfaces": null,
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "DegreeUpdateDataInput",
        "description": null,
        "fields": null,
        "inputFields": [
          {
            "name": "name",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "requiredCredits",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "defaultValue": null
          }
        ],
        "interfaces": null,
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "DegreeUpsertNestedInput",
        "description": null,
        "fields": null,
        "inputFields": [
          {
            "name": "update",
            "description": null,
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "DegreeUpdateDataInput",
                "ofType": null
              }
            },
            "defaultValue": null
          },
          {
            "name": "create",
            "description": null,
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "DegreeCreateInput",
                "ofType": null
              }
            },
            "defaultValue": null
          }
        ],
        "interfaces": null,
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "DepartmentUpdateOneInput",
        "description": null,
        "fields": null,
        "inputFields": [
          {
            "name": "create",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "DepartmentCreateInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "update",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "DepartmentUpdateDataInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "upsert",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "DepartmentUpsertNestedInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "delete",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "disconnect",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "connect",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "DepartmentWhereUniqueInput",
              "ofType": null
            },
            "defaultValue": null
          }
        ],
        "interfaces": null,
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "DepartmentUpdateDataInput",
        "description": null,
        "fields": null,
        "inputFields": [
          {
            "name": "name",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "defaultValue": null
          }
        ],
        "interfaces": null,
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "DepartmentUpsertNestedInput",
        "description": null,
        "fields": null,
        "inputFields": [
          {
            "name": "update",
            "description": null,
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "DepartmentUpdateDataInput",
                "ofType": null
              }
            },
            "defaultValue": null
          },
          {
            "name": "create",
            "description": null,
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "DepartmentCreateInput",
                "ofType": null
              }
            },
            "defaultValue": null
          }
        ],
        "interfaces": null,
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "CourseUpdateOneInput",
        "description": null,
        "fields": null,
        "inputFields": [
          {
            "name": "create",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "CourseCreateInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "update",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "CourseUpdateDataInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "upsert",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "CourseUpsertNestedInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "delete",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "disconnect",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "connect",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "CourseWhereUniqueInput",
              "ofType": null
            },
            "defaultValue": null
          }
        ],
        "interfaces": null,
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "CourseUpsertNestedInput",
        "description": null,
        "fields": null,
        "inputFields": [
          {
            "name": "update",
            "description": null,
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "CourseUpdateDataInput",
                "ofType": null
              }
            },
            "defaultValue": null
          },
          {
            "name": "create",
            "description": null,
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "CourseCreateInput",
                "ofType": null
              }
            },
            "defaultValue": null
          }
        ],
        "interfaces": null,
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "CourseUpsertWithWhereUniqueNestedInput",
        "description": null,
        "fields": null,
        "inputFields": [
          {
            "name": "where",
            "description": null,
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "CourseWhereUniqueInput",
                "ofType": null
              }
            },
            "defaultValue": null
          },
          {
            "name": "update",
            "description": null,
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "CourseUpdateDataInput",
                "ofType": null
              }
            },
            "defaultValue": null
          },
          {
            "name": "create",
            "description": null,
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "CourseCreateInput",
                "ofType": null
              }
            },
            "defaultValue": null
          }
        ],
        "interfaces": null,
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "CourseScalarWhereInput",
        "description": null,
        "fields": null,
        "inputFields": [
          {
            "name": "id",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "ID",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "id_not",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "ID",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "id_in",
            "description": null,
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null
                }
              }
            },
            "defaultValue": null
          },
          {
            "name": "id_not_in",
            "description": null,
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null
                }
              }
            },
            "defaultValue": null
          },
          {
            "name": "id_lt",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "ID",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "id_lte",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "ID",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "id_gt",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "ID",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "id_gte",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "ID",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "id_contains",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "ID",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "id_not_contains",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "ID",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "id_starts_with",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "ID",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "id_not_starts_with",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "ID",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "id_ends_with",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "ID",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "id_not_ends_with",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "ID",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "name",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "name_not",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "name_in",
            "description": null,
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              }
            },
            "defaultValue": null
          },
          {
            "name": "name_not_in",
            "description": null,
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              }
            },
            "defaultValue": null
          },
          {
            "name": "name_lt",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "name_lte",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "name_gt",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "name_gte",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "name_contains",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "name_not_contains",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "name_starts_with",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "name_not_starts_with",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "name_ends_with",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "name_not_ends_with",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "number",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "number_not",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "number_in",
            "description": null,
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              }
            },
            "defaultValue": null
          },
          {
            "name": "number_not_in",
            "description": null,
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              }
            },
            "defaultValue": null
          },
          {
            "name": "number_lt",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "number_lte",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "number_gt",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "number_gte",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "number_contains",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "number_not_contains",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "number_starts_with",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "number_not_starts_with",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "number_ends_with",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "number_not_ends_with",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "level",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "level_not",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "level_in",
            "description": null,
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              }
            },
            "defaultValue": null
          },
          {
            "name": "level_not_in",
            "description": null,
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              }
            },
            "defaultValue": null
          },
          {
            "name": "level_lt",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "level_lte",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "level_gt",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "level_gte",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "credits",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "credits_not",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "credits_in",
            "description": null,
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              }
            },
            "defaultValue": null
          },
          {
            "name": "credits_not_in",
            "description": null,
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              }
            },
            "defaultValue": null
          },
          {
            "name": "credits_lt",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "credits_lte",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "credits_gt",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "credits_gte",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "AND",
            "description": null,
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "CourseScalarWhereInput",
                  "ofType": null
                }
              }
            },
            "defaultValue": null
          },
          {
            "name": "OR",
            "description": null,
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "CourseScalarWhereInput",
                  "ofType": null
                }
              }
            },
            "defaultValue": null
          },
          {
            "name": "NOT",
            "description": null,
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "CourseScalarWhereInput",
                  "ofType": null
                }
              }
            },
            "defaultValue": null
          }
        ],
        "interfaces": null,
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "CourseUpdateManyWithWhereNestedInput",
        "description": null,
        "fields": null,
        "inputFields": [
          {
            "name": "where",
            "description": null,
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "CourseScalarWhereInput",
                "ofType": null
              }
            },
            "defaultValue": null
          },
          {
            "name": "data",
            "description": null,
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "CourseUpdateManyDataInput",
                "ofType": null
              }
            },
            "defaultValue": null
          }
        ],
        "interfaces": null,
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "CourseUpdateManyDataInput",
        "description": null,
        "fields": null,
        "inputFields": [
          {
            "name": "name",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "number",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "level",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "credits",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "defaultValue": null
          }
        ],
        "interfaces": null,
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "StudentUpdateManyMutationInput",
        "description": null,
        "fields": null,
        "inputFields": [
          {
            "name": "name",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "defaultValue": null
          }
        ],
        "interfaces": null,
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "BatchPayload",
        "description": null,
        "fields": [
          {
            "name": "count",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "Long",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "SCALAR",
        "name": "Long",
        "description": null,
        "fields": null,
        "inputFields": null,
        "interfaces": null,
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "SubjectUpdateInput",
        "description": null,
        "fields": null,
        "inputFields": [
          {
            "name": "name",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "defaultValue": null
          }
        ],
        "interfaces": null,
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "SubjectUpdateManyMutationInput",
        "description": null,
        "fields": null,
        "inputFields": [
          {
            "name": "name",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "defaultValue": null
          }
        ],
        "interfaces": null,
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "DegreeUpdateInput",
        "description": null,
        "fields": null,
        "inputFields": [
          {
            "name": "name",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "requiredCredits",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "defaultValue": null
          }
        ],
        "interfaces": null,
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "DegreeUpdateManyMutationInput",
        "description": null,
        "fields": null,
        "inputFields": [
          {
            "name": "name",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "requiredCredits",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "defaultValue": null
          }
        ],
        "interfaces": null,
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "DepartmentUpdateInput",
        "description": null,
        "fields": null,
        "inputFields": [
          {
            "name": "name",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "defaultValue": null
          }
        ],
        "interfaces": null,
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "DepartmentUpdateManyMutationInput",
        "description": null,
        "fields": null,
        "inputFields": [
          {
            "name": "name",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "defaultValue": null
          }
        ],
        "interfaces": null,
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "CourseUpdateInput",
        "description": null,
        "fields": null,
        "inputFields": [
          {
            "name": "name",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "number",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "level",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "credits",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "subject",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "SubjectUpdateOneInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "degree",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "DegreeUpdateOneInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "department",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "DepartmentUpdateOneInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "prerequisite",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "CourseUpdateOneInput",
              "ofType": null
            },
            "defaultValue": null
          }
        ],
        "interfaces": null,
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "CourseUpdateManyMutationInput",
        "description": null,
        "fields": null,
        "inputFields": [
          {
            "name": "name",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "number",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "level",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "credits",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "defaultValue": null
          }
        ],
        "interfaces": null,
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "Subscription",
        "description": null,
        "fields": [
          {
            "name": "student",
            "description": null,
            "args": [
              {
                "name": "where",
                "description": null,
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "StudentSubscriptionWhereInput",
                  "ofType": null
                },
                "defaultValue": null
              }
            ],
            "type": {
              "kind": "OBJECT",
              "name": "StudentSubscriptionPayload",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "subject",
            "description": null,
            "args": [
              {
                "name": "where",
                "description": null,
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "SubjectSubscriptionWhereInput",
                  "ofType": null
                },
                "defaultValue": null
              }
            ],
            "type": {
              "kind": "OBJECT",
              "name": "SubjectSubscriptionPayload",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "degree",
            "description": null,
            "args": [
              {
                "name": "where",
                "description": null,
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "DegreeSubscriptionWhereInput",
                  "ofType": null
                },
                "defaultValue": null
              }
            ],
            "type": {
              "kind": "OBJECT",
              "name": "DegreeSubscriptionPayload",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "department",
            "description": null,
            "args": [
              {
                "name": "where",
                "description": null,
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "DepartmentSubscriptionWhereInput",
                  "ofType": null
                },
                "defaultValue": null
              }
            ],
            "type": {
              "kind": "OBJECT",
              "name": "DepartmentSubscriptionPayload",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "course",
            "description": null,
            "args": [
              {
                "name": "where",
                "description": null,
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "CourseSubscriptionWhereInput",
                  "ofType": null
                },
                "defaultValue": null
              }
            ],
            "type": {
              "kind": "OBJECT",
              "name": "CourseSubscriptionPayload",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "StudentSubscriptionWhereInput",
        "description": null,
        "fields": null,
        "inputFields": [
          {
            "name": "mutation_in",
            "description": null,
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "ENUM",
                  "name": "MutationType",
                  "ofType": null
                }
              }
            },
            "defaultValue": null
          },
          {
            "name": "updatedFields_contains",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "updatedFields_contains_every",
            "description": null,
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              }
            },
            "defaultValue": null
          },
          {
            "name": "updatedFields_contains_some",
            "description": null,
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              }
            },
            "defaultValue": null
          },
          {
            "name": "node",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StudentWhereInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "AND",
            "description": null,
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "StudentSubscriptionWhereInput",
                  "ofType": null
                }
              }
            },
            "defaultValue": null
          },
          {
            "name": "OR",
            "description": null,
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "StudentSubscriptionWhereInput",
                  "ofType": null
                }
              }
            },
            "defaultValue": null
          },
          {
            "name": "NOT",
            "description": null,
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "StudentSubscriptionWhereInput",
                  "ofType": null
                }
              }
            },
            "defaultValue": null
          }
        ],
        "interfaces": null,
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "ENUM",
        "name": "MutationType",
        "description": null,
        "fields": null,
        "inputFields": null,
        "interfaces": null,
        "enumValues": [
          {
            "name": "CREATED",
            "description": null,
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "UPDATED",
            "description": null,
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "DELETED",
            "description": null,
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "StudentSubscriptionPayload",
        "description": null,
        "fields": [
          {
            "name": "mutation",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "ENUM",
                "name": "MutationType",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "node",
            "description": null,
            "args": [],
            "type": {
              "kind": "OBJECT",
              "name": "Student",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "updatedFields",
            "description": null,
            "args": [],
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "previousValues",
            "description": null,
            "args": [],
            "type": {
              "kind": "OBJECT",
              "name": "StudentPreviousValues",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "StudentPreviousValues",
        "description": null,
        "fields": [
          {
            "name": "id",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "name",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "SubjectSubscriptionWhereInput",
        "description": null,
        "fields": null,
        "inputFields": [
          {
            "name": "mutation_in",
            "description": null,
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "ENUM",
                  "name": "MutationType",
                  "ofType": null
                }
              }
            },
            "defaultValue": null
          },
          {
            "name": "updatedFields_contains",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "updatedFields_contains_every",
            "description": null,
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              }
            },
            "defaultValue": null
          },
          {
            "name": "updatedFields_contains_some",
            "description": null,
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              }
            },
            "defaultValue": null
          },
          {
            "name": "node",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "SubjectWhereInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "AND",
            "description": null,
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "SubjectSubscriptionWhereInput",
                  "ofType": null
                }
              }
            },
            "defaultValue": null
          },
          {
            "name": "OR",
            "description": null,
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "SubjectSubscriptionWhereInput",
                  "ofType": null
                }
              }
            },
            "defaultValue": null
          },
          {
            "name": "NOT",
            "description": null,
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "SubjectSubscriptionWhereInput",
                  "ofType": null
                }
              }
            },
            "defaultValue": null
          }
        ],
        "interfaces": null,
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "SubjectSubscriptionPayload",
        "description": null,
        "fields": [
          {
            "name": "mutation",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "ENUM",
                "name": "MutationType",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "node",
            "description": null,
            "args": [],
            "type": {
              "kind": "OBJECT",
              "name": "Subject",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "updatedFields",
            "description": null,
            "args": [],
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "previousValues",
            "description": null,
            "args": [],
            "type": {
              "kind": "OBJECT",
              "name": "SubjectPreviousValues",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "SubjectPreviousValues",
        "description": null,
        "fields": [
          {
            "name": "id",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "name",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "DegreeSubscriptionWhereInput",
        "description": null,
        "fields": null,
        "inputFields": [
          {
            "name": "mutation_in",
            "description": null,
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "ENUM",
                  "name": "MutationType",
                  "ofType": null
                }
              }
            },
            "defaultValue": null
          },
          {
            "name": "updatedFields_contains",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "updatedFields_contains_every",
            "description": null,
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              }
            },
            "defaultValue": null
          },
          {
            "name": "updatedFields_contains_some",
            "description": null,
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              }
            },
            "defaultValue": null
          },
          {
            "name": "node",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "DegreeWhereInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "AND",
            "description": null,
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "DegreeSubscriptionWhereInput",
                  "ofType": null
                }
              }
            },
            "defaultValue": null
          },
          {
            "name": "OR",
            "description": null,
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "DegreeSubscriptionWhereInput",
                  "ofType": null
                }
              }
            },
            "defaultValue": null
          },
          {
            "name": "NOT",
            "description": null,
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "DegreeSubscriptionWhereInput",
                  "ofType": null
                }
              }
            },
            "defaultValue": null
          }
        ],
        "interfaces": null,
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "DegreeSubscriptionPayload",
        "description": null,
        "fields": [
          {
            "name": "mutation",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "ENUM",
                "name": "MutationType",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "node",
            "description": null,
            "args": [],
            "type": {
              "kind": "OBJECT",
              "name": "Degree",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "updatedFields",
            "description": null,
            "args": [],
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "previousValues",
            "description": null,
            "args": [],
            "type": {
              "kind": "OBJECT",
              "name": "DegreePreviousValues",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "DegreePreviousValues",
        "description": null,
        "fields": [
          {
            "name": "id",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "name",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "requiredCredits",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "DepartmentSubscriptionWhereInput",
        "description": null,
        "fields": null,
        "inputFields": [
          {
            "name": "mutation_in",
            "description": null,
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "ENUM",
                  "name": "MutationType",
                  "ofType": null
                }
              }
            },
            "defaultValue": null
          },
          {
            "name": "updatedFields_contains",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "updatedFields_contains_every",
            "description": null,
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              }
            },
            "defaultValue": null
          },
          {
            "name": "updatedFields_contains_some",
            "description": null,
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              }
            },
            "defaultValue": null
          },
          {
            "name": "node",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "DepartmentWhereInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "AND",
            "description": null,
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "DepartmentSubscriptionWhereInput",
                  "ofType": null
                }
              }
            },
            "defaultValue": null
          },
          {
            "name": "OR",
            "description": null,
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "DepartmentSubscriptionWhereInput",
                  "ofType": null
                }
              }
            },
            "defaultValue": null
          },
          {
            "name": "NOT",
            "description": null,
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "DepartmentSubscriptionWhereInput",
                  "ofType": null
                }
              }
            },
            "defaultValue": null
          }
        ],
        "interfaces": null,
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "DepartmentSubscriptionPayload",
        "description": null,
        "fields": [
          {
            "name": "mutation",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "ENUM",
                "name": "MutationType",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "node",
            "description": null,
            "args": [],
            "type": {
              "kind": "OBJECT",
              "name": "Department",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "updatedFields",
            "description": null,
            "args": [],
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "previousValues",
            "description": null,
            "args": [],
            "type": {
              "kind": "OBJECT",
              "name": "DepartmentPreviousValues",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "DepartmentPreviousValues",
        "description": null,
        "fields": [
          {
            "name": "id",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "name",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "CourseSubscriptionWhereInput",
        "description": null,
        "fields": null,
        "inputFields": [
          {
            "name": "mutation_in",
            "description": null,
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "ENUM",
                  "name": "MutationType",
                  "ofType": null
                }
              }
            },
            "defaultValue": null
          },
          {
            "name": "updatedFields_contains",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "updatedFields_contains_every",
            "description": null,
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              }
            },
            "defaultValue": null
          },
          {
            "name": "updatedFields_contains_some",
            "description": null,
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              }
            },
            "defaultValue": null
          },
          {
            "name": "node",
            "description": null,
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "CourseWhereInput",
              "ofType": null
            },
            "defaultValue": null
          },
          {
            "name": "AND",
            "description": null,
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "CourseSubscriptionWhereInput",
                  "ofType": null
                }
              }
            },
            "defaultValue": null
          },
          {
            "name": "OR",
            "description": null,
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "CourseSubscriptionWhereInput",
                  "ofType": null
                }
              }
            },
            "defaultValue": null
          },
          {
            "name": "NOT",
            "description": null,
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "CourseSubscriptionWhereInput",
                  "ofType": null
                }
              }
            },
            "defaultValue": null
          }
        ],
        "interfaces": null,
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "CourseSubscriptionPayload",
        "description": null,
        "fields": [
          {
            "name": "mutation",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "ENUM",
                "name": "MutationType",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "node",
            "description": null,
            "args": [],
            "type": {
              "kind": "OBJECT",
              "name": "Course",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "updatedFields",
            "description": null,
            "args": [],
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "previousValues",
            "description": null,
            "args": [],
            "type": {
              "kind": "OBJECT",
              "name": "CoursePreviousValues",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "CoursePreviousValues",
        "description": null,
        "fields": [
          {
            "name": "id",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "name",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "number",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "level",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "credits",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "__Schema",
        "description": "A GraphQL Schema defines the capabilities of a GraphQL server. It exposes all available types and directives on the server, as well as the entry points for query, mutation, and subscription operations.",
        "fields": [
          {
            "name": "types",
            "description": "A list of all types supported by this server.",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "LIST",
                "name": null,
                "ofType": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "__Type",
                    "ofType": null
                  }
                }
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "queryType",
            "description": "The type that query operations will be rooted at.",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "OBJECT",
                "name": "__Type",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "mutationType",
            "description": "If this server supports mutation, the type that mutation operations will be rooted at.",
            "args": [],
            "type": {
              "kind": "OBJECT",
              "name": "__Type",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "subscriptionType",
            "description": "If this server support subscription, the type that subscription operations will be rooted at.",
            "args": [],
            "type": {
              "kind": "OBJECT",
              "name": "__Type",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "directives",
            "description": "A list of all directives supported by this server.",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "LIST",
                "name": null,
                "ofType": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "__Directive",
                    "ofType": null
                  }
                }
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "__Type",
        "description": "The fundamental unit of any GraphQL Schema is the type. There are many kinds of types in GraphQL as represented by the `__TypeKind` enum.\n\nDepending on the kind of a type, certain fields describe information about that type. Scalar types provide no information beyond a name and description, while Enum types provide their values. Object and Interface types provide the fields they describe. Abstract types, Union and Interface, provide the Object types possible at runtime. List and NonNull types compose other types.",
        "fields": [
          {
            "name": "kind",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "ENUM",
                "name": "__TypeKind",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "name",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "description",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "fields",
            "description": null,
            "args": [
              {
                "name": "includeDeprecated",
                "description": null,
                "type": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                },
                "defaultValue": "false"
              }
            ],
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "OBJECT",
                  "name": "__Field",
                  "ofType": null
                }
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "interfaces",
            "description": null,
            "args": [],
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "OBJECT",
                  "name": "__Type",
                  "ofType": null
                }
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "possibleTypes",
            "description": null,
            "args": [],
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "OBJECT",
                  "name": "__Type",
                  "ofType": null
                }
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "enumValues",
            "description": null,
            "args": [
              {
                "name": "includeDeprecated",
                "description": null,
                "type": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                },
                "defaultValue": "false"
              }
            ],
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "OBJECT",
                  "name": "__EnumValue",
                  "ofType": null
                }
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "inputFields",
            "description": null,
            "args": [],
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "OBJECT",
                  "name": "__InputValue",
                  "ofType": null
                }
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "ofType",
            "description": null,
            "args": [],
            "type": {
              "kind": "OBJECT",
              "name": "__Type",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "ENUM",
        "name": "__TypeKind",
        "description": "An enum describing what kind of type a given `__Type` is.",
        "fields": null,
        "inputFields": null,
        "interfaces": null,
        "enumValues": [
          {
            "name": "SCALAR",
            "description": "Indicates this type is a scalar.",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "OBJECT",
            "description": "Indicates this type is an object. `fields` and `interfaces` are valid fields.",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "INTERFACE",
            "description": "Indicates this type is an interface. `fields` and `possibleTypes` are valid fields.",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "UNION",
            "description": "Indicates this type is a union. `possibleTypes` is a valid field.",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "ENUM",
            "description": "Indicates this type is an enum. `enumValues` is a valid field.",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "INPUT_OBJECT",
            "description": "Indicates this type is an input object. `inputFields` is a valid field.",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "LIST",
            "description": "Indicates this type is a list. `ofType` is a valid field.",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "NON_NULL",
            "description": "Indicates this type is a non-null. `ofType` is a valid field.",
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "__Field",
        "description": "Object and Interface types are described by a list of Fields, each of which has a name, potentially a list of arguments, and a return type.",
        "fields": [
          {
            "name": "name",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "description",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "args",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "LIST",
                "name": null,
                "ofType": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "__InputValue",
                    "ofType": null
                  }
                }
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "type",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "OBJECT",
                "name": "__Type",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "isDeprecated",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "deprecationReason",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "__InputValue",
        "description": "Arguments provided to Fields or Directives and the input fields of an InputObject are represented as Input Values which describe their type and optionally a default value.",
        "fields": [
          {
            "name": "name",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "description",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "type",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "OBJECT",
                "name": "__Type",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "defaultValue",
            "description": "A GraphQL-formatted string representing the default value for this input value.",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "__EnumValue",
        "description": "One possible value for a given Enum. Enum values are unique values, not a placeholder for a string or numeric value. However an Enum value is returned in a JSON response as a string.",
        "fields": [
          {
            "name": "name",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "description",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "isDeprecated",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "deprecationReason",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "__Directive",
        "description": "A Directive provides a way to describe alternate runtime execution and type validation behavior in a GraphQL document.\n\nIn some cases, you need to provide options to alter GraphQL's execution behavior in ways field arguments will not suffice, such as conditionally including or skipping a field. Directives provide this by describing additional information to the executor.",
        "fields": [
          {
            "name": "name",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "description",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "locations",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "LIST",
                "name": null,
                "ofType": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "ENUM",
                    "name": "__DirectiveLocation",
                    "ofType": null
                  }
                }
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "args",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "LIST",
                "name": null,
                "ofType": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "__InputValue",
                    "ofType": null
                  }
                }
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "ENUM",
        "name": "__DirectiveLocation",
        "description": "A Directive can be adjacent to many parts of the GraphQL language, a __DirectiveLocation describes one such possible adjacencies.",
        "fields": null,
        "inputFields": null,
        "interfaces": null,
        "enumValues": [
          {
            "name": "QUERY",
            "description": "Location adjacent to a query operation.",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "MUTATION",
            "description": "Location adjacent to a mutation operation.",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "SUBSCRIPTION",
            "description": "Location adjacent to a subscription operation.",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "FIELD",
            "description": "Location adjacent to a field.",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "FRAGMENT_DEFINITION",
            "description": "Location adjacent to a fragment definition.",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "FRAGMENT_SPREAD",
            "description": "Location adjacent to a fragment spread.",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "INLINE_FRAGMENT",
            "description": "Location adjacent to an inline fragment.",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "VARIABLE_DEFINITION",
            "description": "Location adjacent to a variable definition.",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "SCHEMA",
            "description": "Location adjacent to a schema definition.",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "SCALAR",
            "description": "Location adjacent to a scalar definition.",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "OBJECT",
            "description": "Location adjacent to an object type definition.",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "FIELD_DEFINITION",
            "description": "Location adjacent to a field definition.",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "ARGUMENT_DEFINITION",
            "description": "Location adjacent to an argument definition.",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "INTERFACE",
            "description": "Location adjacent to an interface definition.",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "UNION",
            "description": "Location adjacent to a union definition.",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "ENUM",
            "description": "Location adjacent to an enum definition.",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "ENUM_VALUE",
            "description": "Location adjacent to an enum value definition.",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "INPUT_OBJECT",
            "description": "Location adjacent to an input object type definition.",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "INPUT_FIELD_DEFINITION",
            "description": "Location adjacent to an input object field definition.",
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "possibleTypes": null
      }
    ],
    "directives": [
      {
        "name": "include",
        "description": "Directs the executor to include this field or fragment only when the `if` argument is true.",
        "locations": [
          "FIELD",
          "FRAGMENT_SPREAD",
          "INLINE_FRAGMENT"
        ],
        "args": [
          {
            "name": "if",
            "description": "Included when true.",
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              }
            },
            "defaultValue": null
          }
        ]
      },
      {
        "name": "skip",
        "description": "Directs the executor to skip this field or fragment when the `if` argument is true.",
        "locations": [
          "FIELD",
          "FRAGMENT_SPREAD",
          "INLINE_FRAGMENT"
        ],
        "args": [
          {
            "name": "if",
            "description": "Skipped when true.",
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              }
            },
            "defaultValue": null
          }
        ]
      },
      {
        "name": "deprecated",
        "description": "Marks an element of a GraphQL schema as no longer supported.",
        "locations": [
          "FIELD_DEFINITION",
          "ENUM_VALUE"
        ],
        "args": [
          {
            "name": "reason",
            "description": "Explains why this element was deprecated, usually also including a suggestion for how to access supported similar data. Formatted using the Markdown syntax (as specified by [CommonMark](https://commonmark.org/).",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "defaultValue": "\"No longer supported\""
          }
        ]
      }
    ]
  }
}
}
  