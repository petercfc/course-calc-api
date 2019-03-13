// GENERATED TYPES FOR NEXUS-PRISMA. /!\ DO NOT EDIT MANUALLY

import { core } from 'nexus'
import { GraphQLResolveInfo } from 'graphql'
import * as prisma from '../prisma-client'

declare global {
  interface NexusPrismaGen extends NexusPrismaTypes {}
}

export interface NexusPrismaTypes {
  objectTypes: {
    fields: {
      Query: QueryObject
      Student: StudentObject
      Course: CourseObject
      Subject: SubjectObject
      Degree: DegreeObject
      Department: DepartmentObject
      StudentConnection: StudentConnectionObject
      PageInfo: PageInfoObject
      StudentEdge: StudentEdgeObject
      AggregateStudent: AggregateStudentObject
      SubjectConnection: SubjectConnectionObject
      SubjectEdge: SubjectEdgeObject
      AggregateSubject: AggregateSubjectObject
      DegreeConnection: DegreeConnectionObject
      DegreeEdge: DegreeEdgeObject
      AggregateDegree: AggregateDegreeObject
      DepartmentConnection: DepartmentConnectionObject
      DepartmentEdge: DepartmentEdgeObject
      AggregateDepartment: AggregateDepartmentObject
      CourseConnection: CourseConnectionObject
      CourseEdge: CourseEdgeObject
      AggregateCourse: AggregateCourseObject
      Mutation: MutationObject
      BatchPayload: BatchPayloadObject
      Subscription: SubscriptionObject
      StudentSubscriptionPayload: StudentSubscriptionPayloadObject
      StudentPreviousValues: StudentPreviousValuesObject
      SubjectSubscriptionPayload: SubjectSubscriptionPayloadObject
      SubjectPreviousValues: SubjectPreviousValuesObject
      DegreeSubscriptionPayload: DegreeSubscriptionPayloadObject
      DegreePreviousValues: DegreePreviousValuesObject
      DepartmentSubscriptionPayload: DepartmentSubscriptionPayloadObject
      DepartmentPreviousValues: DepartmentPreviousValuesObject
      CourseSubscriptionPayload: CourseSubscriptionPayloadObject
      CoursePreviousValues: CoursePreviousValuesObject
    }
    fieldsDetails: {
      Query: QueryFieldDetails
      Student: StudentFieldDetails
      Course: CourseFieldDetails
      Subject: SubjectFieldDetails
      Degree: DegreeFieldDetails
      Department: DepartmentFieldDetails
      StudentConnection: StudentConnectionFieldDetails
      PageInfo: PageInfoFieldDetails
      StudentEdge: StudentEdgeFieldDetails
      AggregateStudent: AggregateStudentFieldDetails
      SubjectConnection: SubjectConnectionFieldDetails
      SubjectEdge: SubjectEdgeFieldDetails
      AggregateSubject: AggregateSubjectFieldDetails
      DegreeConnection: DegreeConnectionFieldDetails
      DegreeEdge: DegreeEdgeFieldDetails
      AggregateDegree: AggregateDegreeFieldDetails
      DepartmentConnection: DepartmentConnectionFieldDetails
      DepartmentEdge: DepartmentEdgeFieldDetails
      AggregateDepartment: AggregateDepartmentFieldDetails
      CourseConnection: CourseConnectionFieldDetails
      CourseEdge: CourseEdgeFieldDetails
      AggregateCourse: AggregateCourseFieldDetails
      Mutation: MutationFieldDetails
      BatchPayload: BatchPayloadFieldDetails
      Subscription: SubscriptionFieldDetails
      StudentSubscriptionPayload: StudentSubscriptionPayloadFieldDetails
      StudentPreviousValues: StudentPreviousValuesFieldDetails
      SubjectSubscriptionPayload: SubjectSubscriptionPayloadFieldDetails
      SubjectPreviousValues: SubjectPreviousValuesFieldDetails
      DegreeSubscriptionPayload: DegreeSubscriptionPayloadFieldDetails
      DegreePreviousValues: DegreePreviousValuesFieldDetails
      DepartmentSubscriptionPayload: DepartmentSubscriptionPayloadFieldDetails
      DepartmentPreviousValues: DepartmentPreviousValuesFieldDetails
      CourseSubscriptionPayload: CourseSubscriptionPayloadFieldDetails
      CoursePreviousValues: CoursePreviousValuesFieldDetails
    }
  }
  inputTypes: {
    fields: {
      StudentWhereUniqueInput: StudentWhereUniqueInputInputObject
      CourseWhereInput: CourseWhereInputInputObject
      SubjectWhereInput: SubjectWhereInputInputObject
      DegreeWhereInput: DegreeWhereInputInputObject
      DepartmentWhereInput: DepartmentWhereInputInputObject
      StudentWhereInput: StudentWhereInputInputObject
      SubjectWhereUniqueInput: SubjectWhereUniqueInputInputObject
      DegreeWhereUniqueInput: DegreeWhereUniqueInputInputObject
      DepartmentWhereUniqueInput: DepartmentWhereUniqueInputInputObject
      CourseWhereUniqueInput: CourseWhereUniqueInputInputObject
      StudentCreateInput: StudentCreateInputInputObject
      CourseCreateManyInput: CourseCreateManyInputInputObject
      CourseCreateInput: CourseCreateInputInputObject
      SubjectCreateOneInput: SubjectCreateOneInputInputObject
      SubjectCreateInput: SubjectCreateInputInputObject
      DegreeCreateOneInput: DegreeCreateOneInputInputObject
      DegreeCreateInput: DegreeCreateInputInputObject
      DepartmentCreateOneInput: DepartmentCreateOneInputInputObject
      DepartmentCreateInput: DepartmentCreateInputInputObject
      CourseCreateOneInput: CourseCreateOneInputInputObject
      StudentUpdateInput: StudentUpdateInputInputObject
      CourseUpdateManyInput: CourseUpdateManyInputInputObject
      CourseUpdateWithWhereUniqueNestedInput: CourseUpdateWithWhereUniqueNestedInputInputObject
      CourseUpdateDataInput: CourseUpdateDataInputInputObject
      SubjectUpdateOneInput: SubjectUpdateOneInputInputObject
      SubjectUpdateDataInput: SubjectUpdateDataInputInputObject
      SubjectUpsertNestedInput: SubjectUpsertNestedInputInputObject
      DegreeUpdateOneInput: DegreeUpdateOneInputInputObject
      DegreeUpdateDataInput: DegreeUpdateDataInputInputObject
      DegreeUpsertNestedInput: DegreeUpsertNestedInputInputObject
      DepartmentUpdateOneInput: DepartmentUpdateOneInputInputObject
      DepartmentUpdateDataInput: DepartmentUpdateDataInputInputObject
      DepartmentUpsertNestedInput: DepartmentUpsertNestedInputInputObject
      CourseUpdateOneInput: CourseUpdateOneInputInputObject
      CourseUpsertNestedInput: CourseUpsertNestedInputInputObject
      CourseUpsertWithWhereUniqueNestedInput: CourseUpsertWithWhereUniqueNestedInputInputObject
      CourseScalarWhereInput: CourseScalarWhereInputInputObject
      CourseUpdateManyWithWhereNestedInput: CourseUpdateManyWithWhereNestedInputInputObject
      CourseUpdateManyDataInput: CourseUpdateManyDataInputInputObject
      StudentUpdateManyMutationInput: StudentUpdateManyMutationInputInputObject
      SubjectUpdateInput: SubjectUpdateInputInputObject
      SubjectUpdateManyMutationInput: SubjectUpdateManyMutationInputInputObject
      DegreeUpdateInput: DegreeUpdateInputInputObject
      DegreeUpdateManyMutationInput: DegreeUpdateManyMutationInputInputObject
      DepartmentUpdateInput: DepartmentUpdateInputInputObject
      DepartmentUpdateManyMutationInput: DepartmentUpdateManyMutationInputInputObject
      CourseUpdateInput: CourseUpdateInputInputObject
      CourseUpdateManyMutationInput: CourseUpdateManyMutationInputInputObject
      StudentSubscriptionWhereInput: StudentSubscriptionWhereInputInputObject
      SubjectSubscriptionWhereInput: SubjectSubscriptionWhereInputInputObject
      DegreeSubscriptionWhereInput: DegreeSubscriptionWhereInputInputObject
      DepartmentSubscriptionWhereInput: DepartmentSubscriptionWhereInputInputObject
      CourseSubscriptionWhereInput: CourseSubscriptionWhereInputInputObject
    }
  }
  enumTypes: {
    CourseOrderByInput: CourseOrderByInputValues,
    StudentOrderByInput: StudentOrderByInputValues,
    SubjectOrderByInput: SubjectOrderByInputValues,
    DegreeOrderByInput: DegreeOrderByInputValues,
    DepartmentOrderByInput: DepartmentOrderByInputValues,
    MutationType: MutationTypeValues,
  }
}

// Types for Query

type QueryObject =
  | QueryFields
  | { name: 'student', args?: QueryStudentArgs[] | false, alias?: string  } 
  | { name: 'students', args?: QueryStudentsArgs[] | false, alias?: string  } 
  | { name: 'studentsConnection', args?: QueryStudentsConnectionArgs[] | false, alias?: string  } 
  | { name: 'subject', args?: QuerySubjectArgs[] | false, alias?: string  } 
  | { name: 'subjects', args?: QuerySubjectsArgs[] | false, alias?: string  } 
  | { name: 'subjectsConnection', args?: QuerySubjectsConnectionArgs[] | false, alias?: string  } 
  | { name: 'degree', args?: QueryDegreeArgs[] | false, alias?: string  } 
  | { name: 'degrees', args?: QueryDegreesArgs[] | false, alias?: string  } 
  | { name: 'degreesConnection', args?: QueryDegreesConnectionArgs[] | false, alias?: string  } 
  | { name: 'department', args?: QueryDepartmentArgs[] | false, alias?: string  } 
  | { name: 'departments', args?: QueryDepartmentsArgs[] | false, alias?: string  } 
  | { name: 'departmentsConnection', args?: QueryDepartmentsConnectionArgs[] | false, alias?: string  } 
  | { name: 'course', args?: QueryCourseArgs[] | false, alias?: string  } 
  | { name: 'courses', args?: QueryCoursesArgs[] | false, alias?: string  } 
  | { name: 'coursesConnection', args?: QueryCoursesConnectionArgs[] | false, alias?: string  } 
  | { name: 'node', args?: QueryNodeArgs[] | false, alias?: string  } 

type QueryFields =
  | 'student'
  | 'students'
  | 'studentsConnection'
  | 'subject'
  | 'subjects'
  | 'subjectsConnection'
  | 'degree'
  | 'degrees'
  | 'degreesConnection'
  | 'department'
  | 'departments'
  | 'departmentsConnection'
  | 'course'
  | 'courses'
  | 'coursesConnection'
  | 'node'


type QueryStudentArgs =
  | 'where'
type QueryStudentsArgs =
  | 'where'
  | 'orderBy'
  | 'skip'
  | 'after'
  | 'before'
  | 'first'
  | 'last'
type QueryStudentsConnectionArgs =
  | 'where'
  | 'orderBy'
  | 'skip'
  | 'after'
  | 'before'
  | 'first'
  | 'last'
type QuerySubjectArgs =
  | 'where'
type QuerySubjectsArgs =
  | 'where'
  | 'orderBy'
  | 'skip'
  | 'after'
  | 'before'
  | 'first'
  | 'last'
type QuerySubjectsConnectionArgs =
  | 'where'
  | 'orderBy'
  | 'skip'
  | 'after'
  | 'before'
  | 'first'
  | 'last'
type QueryDegreeArgs =
  | 'where'
type QueryDegreesArgs =
  | 'where'
  | 'orderBy'
  | 'skip'
  | 'after'
  | 'before'
  | 'first'
  | 'last'
type QueryDegreesConnectionArgs =
  | 'where'
  | 'orderBy'
  | 'skip'
  | 'after'
  | 'before'
  | 'first'
  | 'last'
type QueryDepartmentArgs =
  | 'where'
type QueryDepartmentsArgs =
  | 'where'
  | 'orderBy'
  | 'skip'
  | 'after'
  | 'before'
  | 'first'
  | 'last'
type QueryDepartmentsConnectionArgs =
  | 'where'
  | 'orderBy'
  | 'skip'
  | 'after'
  | 'before'
  | 'first'
  | 'last'
type QueryCourseArgs =
  | 'where'
type QueryCoursesArgs =
  | 'where'
  | 'orderBy'
  | 'skip'
  | 'after'
  | 'before'
  | 'first'
  | 'last'
type QueryCoursesConnectionArgs =
  | 'where'
  | 'orderBy'
  | 'skip'
  | 'after'
  | 'before'
  | 'first'
  | 'last'
type QueryNodeArgs =
  | 'id'
  

export interface QueryFieldDetails {
  student: {
    type: 'Student'
    args: Record<QueryStudentArgs, core.NexusArgDef<string>>
    description: string
    list: undefined
    nullable: true
    resolve: (
      root: core.RootValue<"Query">,
      args: { where: StudentWhereUniqueInput }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.Student | null> | prisma.Student | null
  }
  students: {
    type: 'Student'
    args: Record<QueryStudentsArgs, core.NexusArgDef<string>>
    description: string
    list: true
    nullable: false
    resolve: (
      root: core.RootValue<"Query">,
      args: { where?: StudentWhereInput | null, orderBy?: prisma.StudentOrderByInput | null, skip?: number | null, after?: string | null, before?: string | null, first?: number | null, last?: number | null }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.Student[]> | prisma.Student[]
  }
  studentsConnection: {
    type: 'StudentConnection'
    args: Record<QueryStudentsConnectionArgs, core.NexusArgDef<string>>
    description: string
    list: undefined
    nullable: false
    resolve: (
      root: core.RootValue<"Query">,
      args: { where?: StudentWhereInput | null, orderBy?: prisma.StudentOrderByInput | null, skip?: number | null, after?: string | null, before?: string | null, first?: number | null, last?: number | null }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.StudentConnection> | prisma.StudentConnection
  }
  subject: {
    type: 'Subject'
    args: Record<QuerySubjectArgs, core.NexusArgDef<string>>
    description: string
    list: undefined
    nullable: true
    resolve: (
      root: core.RootValue<"Query">,
      args: { where: SubjectWhereUniqueInput }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.Subject | null> | prisma.Subject | null
  }
  subjects: {
    type: 'Subject'
    args: Record<QuerySubjectsArgs, core.NexusArgDef<string>>
    description: string
    list: true
    nullable: false
    resolve: (
      root: core.RootValue<"Query">,
      args: { where?: SubjectWhereInput | null, orderBy?: prisma.SubjectOrderByInput | null, skip?: number | null, after?: string | null, before?: string | null, first?: number | null, last?: number | null }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.Subject[]> | prisma.Subject[]
  }
  subjectsConnection: {
    type: 'SubjectConnection'
    args: Record<QuerySubjectsConnectionArgs, core.NexusArgDef<string>>
    description: string
    list: undefined
    nullable: false
    resolve: (
      root: core.RootValue<"Query">,
      args: { where?: SubjectWhereInput | null, orderBy?: prisma.SubjectOrderByInput | null, skip?: number | null, after?: string | null, before?: string | null, first?: number | null, last?: number | null }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.SubjectConnection> | prisma.SubjectConnection
  }
  degree: {
    type: 'Degree'
    args: Record<QueryDegreeArgs, core.NexusArgDef<string>>
    description: string
    list: undefined
    nullable: true
    resolve: (
      root: core.RootValue<"Query">,
      args: { where: DegreeWhereUniqueInput }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.Degree | null> | prisma.Degree | null
  }
  degrees: {
    type: 'Degree'
    args: Record<QueryDegreesArgs, core.NexusArgDef<string>>
    description: string
    list: true
    nullable: false
    resolve: (
      root: core.RootValue<"Query">,
      args: { where?: DegreeWhereInput | null, orderBy?: prisma.DegreeOrderByInput | null, skip?: number | null, after?: string | null, before?: string | null, first?: number | null, last?: number | null }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.Degree[]> | prisma.Degree[]
  }
  degreesConnection: {
    type: 'DegreeConnection'
    args: Record<QueryDegreesConnectionArgs, core.NexusArgDef<string>>
    description: string
    list: undefined
    nullable: false
    resolve: (
      root: core.RootValue<"Query">,
      args: { where?: DegreeWhereInput | null, orderBy?: prisma.DegreeOrderByInput | null, skip?: number | null, after?: string | null, before?: string | null, first?: number | null, last?: number | null }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.DegreeConnection> | prisma.DegreeConnection
  }
  department: {
    type: 'Department'
    args: Record<QueryDepartmentArgs, core.NexusArgDef<string>>
    description: string
    list: undefined
    nullable: true
    resolve: (
      root: core.RootValue<"Query">,
      args: { where: DepartmentWhereUniqueInput }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.Department | null> | prisma.Department | null
  }
  departments: {
    type: 'Department'
    args: Record<QueryDepartmentsArgs, core.NexusArgDef<string>>
    description: string
    list: true
    nullable: false
    resolve: (
      root: core.RootValue<"Query">,
      args: { where?: DepartmentWhereInput | null, orderBy?: prisma.DepartmentOrderByInput | null, skip?: number | null, after?: string | null, before?: string | null, first?: number | null, last?: number | null }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.Department[]> | prisma.Department[]
  }
  departmentsConnection: {
    type: 'DepartmentConnection'
    args: Record<QueryDepartmentsConnectionArgs, core.NexusArgDef<string>>
    description: string
    list: undefined
    nullable: false
    resolve: (
      root: core.RootValue<"Query">,
      args: { where?: DepartmentWhereInput | null, orderBy?: prisma.DepartmentOrderByInput | null, skip?: number | null, after?: string | null, before?: string | null, first?: number | null, last?: number | null }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.DepartmentConnection> | prisma.DepartmentConnection
  }
  course: {
    type: 'Course'
    args: Record<QueryCourseArgs, core.NexusArgDef<string>>
    description: string
    list: undefined
    nullable: true
    resolve: (
      root: core.RootValue<"Query">,
      args: { where: CourseWhereUniqueInput }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.Course | null> | prisma.Course | null
  }
  courses: {
    type: 'Course'
    args: Record<QueryCoursesArgs, core.NexusArgDef<string>>
    description: string
    list: true
    nullable: false
    resolve: (
      root: core.RootValue<"Query">,
      args: { where?: CourseWhereInput | null, orderBy?: prisma.CourseOrderByInput | null, skip?: number | null, after?: string | null, before?: string | null, first?: number | null, last?: number | null }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.Course[]> | prisma.Course[]
  }
  coursesConnection: {
    type: 'CourseConnection'
    args: Record<QueryCoursesConnectionArgs, core.NexusArgDef<string>>
    description: string
    list: undefined
    nullable: false
    resolve: (
      root: core.RootValue<"Query">,
      args: { where?: CourseWhereInput | null, orderBy?: prisma.CourseOrderByInput | null, skip?: number | null, after?: string | null, before?: string | null, first?: number | null, last?: number | null }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.CourseConnection> | prisma.CourseConnection
  }
  node: {
    type: 'Node'
    args: Record<QueryNodeArgs, core.NexusArgDef<string>>
    description: string
    list: undefined
    nullable: true
    resolve: (
      root: core.RootValue<"Query">,
      args: { id: string }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.Node | null> | prisma.Node | null
  }
}
  

// Types for Student

type StudentObject =
  | StudentFields
  | { name: 'id', args?: [] | false, alias?: string  } 
  | { name: 'name', args?: [] | false, alias?: string  } 
  | { name: 'coursesPassed', args?: StudentCoursesPassedArgs[] | false, alias?: string  } 
  | { name: 'enrolledDegree', args?: [] | false, alias?: string  } 

type StudentFields =
  | 'id'
  | 'name'
  | 'coursesPassed'
  | 'enrolledDegree'


type StudentCoursesPassedArgs =
  | 'where'
  | 'orderBy'
  | 'skip'
  | 'after'
  | 'before'
  | 'first'
  | 'last'
  

export interface StudentFieldDetails {
  id: {
    type: 'ID'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: undefined
  }
  name: {
    type: 'String'
    args: {}
    description: string
    list: undefined
    nullable: true
    resolve: undefined
  }
  coursesPassed: {
    type: 'Course'
    args: Record<StudentCoursesPassedArgs, core.NexusArgDef<string>>
    description: string
    list: true
    nullable: false
    resolve: (
      root: core.RootValue<"Student">,
      args: { where?: CourseWhereInput | null, orderBy?: prisma.CourseOrderByInput | null, skip?: number | null, after?: string | null, before?: string | null, first?: number | null, last?: number | null }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.Course[]> | prisma.Course[]
  }
  enrolledDegree: {
    type: 'Degree'
    args: {}
    description: string
    list: undefined
    nullable: true
    resolve: (
      root: core.RootValue<"Student">,
      args: {  }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.Degree | null> | prisma.Degree | null
  }
}
  

// Types for Course

type CourseObject =
  | CourseFields
  | { name: 'id', args?: [] | false, alias?: string  } 
  | { name: 'name', args?: [] | false, alias?: string  } 
  | { name: 'number', args?: [] | false, alias?: string  } 
  | { name: 'level', args?: [] | false, alias?: string  } 
  | { name: 'credits', args?: [] | false, alias?: string  } 
  | { name: 'subject', args?: [] | false, alias?: string  } 
  | { name: 'degree', args?: [] | false, alias?: string  } 
  | { name: 'department', args?: [] | false, alias?: string  } 
  | { name: 'prerequisite', args?: [] | false, alias?: string  } 

type CourseFields =
  | 'id'
  | 'name'
  | 'number'
  | 'level'
  | 'credits'
  | 'subject'
  | 'degree'
  | 'department'
  | 'prerequisite'



  

export interface CourseFieldDetails {
  id: {
    type: 'ID'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: undefined
  }
  name: {
    type: 'String'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: undefined
  }
  number: {
    type: 'String'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: undefined
  }
  level: {
    type: 'Int'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: undefined
  }
  credits: {
    type: 'Int'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: undefined
  }
  subject: {
    type: 'Subject'
    args: {}
    description: string
    list: undefined
    nullable: true
    resolve: (
      root: core.RootValue<"Course">,
      args: {  }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.Subject | null> | prisma.Subject | null
  }
  degree: {
    type: 'Degree'
    args: {}
    description: string
    list: undefined
    nullable: true
    resolve: (
      root: core.RootValue<"Course">,
      args: {  }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.Degree | null> | prisma.Degree | null
  }
  department: {
    type: 'Department'
    args: {}
    description: string
    list: undefined
    nullable: true
    resolve: (
      root: core.RootValue<"Course">,
      args: {  }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.Department | null> | prisma.Department | null
  }
  prerequisite: {
    type: 'Course'
    args: {}
    description: string
    list: undefined
    nullable: true
    resolve: (
      root: core.RootValue<"Course">,
      args: {  }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.Course | null> | prisma.Course | null
  }
}
  

// Types for Subject

type SubjectObject =
  | SubjectFields
  | { name: 'id', args?: [] | false, alias?: string  } 
  | { name: 'name', args?: [] | false, alias?: string  } 

type SubjectFields =
  | 'id'
  | 'name'



  

export interface SubjectFieldDetails {
  id: {
    type: 'ID'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: undefined
  }
  name: {
    type: 'String'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: undefined
  }
}
  

// Types for Degree

type DegreeObject =
  | DegreeFields
  | { name: 'id', args?: [] | false, alias?: string  } 
  | { name: 'name', args?: [] | false, alias?: string  } 
  | { name: 'requiredCredits', args?: [] | false, alias?: string  } 

type DegreeFields =
  | 'id'
  | 'name'
  | 'requiredCredits'



  

export interface DegreeFieldDetails {
  id: {
    type: 'ID'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: undefined
  }
  name: {
    type: 'String'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: undefined
  }
  requiredCredits: {
    type: 'Int'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: undefined
  }
}
  

// Types for Department

type DepartmentObject =
  | DepartmentFields
  | { name: 'id', args?: [] | false, alias?: string  } 
  | { name: 'name', args?: [] | false, alias?: string  } 

type DepartmentFields =
  | 'id'
  | 'name'



  

export interface DepartmentFieldDetails {
  id: {
    type: 'ID'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: undefined
  }
  name: {
    type: 'String'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: undefined
  }
}
  

// Types for StudentConnection

type StudentConnectionObject =
  | StudentConnectionFields
  | { name: 'pageInfo', args?: [] | false, alias?: string  } 
  | { name: 'edges', args?: [] | false, alias?: string  } 
  | { name: 'aggregate', args?: [] | false, alias?: string  } 

type StudentConnectionFields =
  | 'pageInfo'
  | 'edges'
  | 'aggregate'



  

export interface StudentConnectionFieldDetails {
  pageInfo: {
    type: 'PageInfo'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: (
      root: core.RootValue<"StudentConnection">,
      args: {  }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.PageInfo> | prisma.PageInfo
  }
  edges: {
    type: 'StudentEdge'
    args: {}
    description: string
    list: true
    nullable: false
    resolve: (
      root: core.RootValue<"StudentConnection">,
      args: {  }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.StudentEdge[]> | prisma.StudentEdge[]
  }
  aggregate: {
    type: 'AggregateStudent'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: (
      root: core.RootValue<"StudentConnection">,
      args: {  }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.AggregateStudent> | prisma.AggregateStudent
  }
}
  

// Types for PageInfo

type PageInfoObject =
  | PageInfoFields
  | { name: 'hasNextPage', args?: [] | false, alias?: string  } 
  | { name: 'hasPreviousPage', args?: [] | false, alias?: string  } 
  | { name: 'startCursor', args?: [] | false, alias?: string  } 
  | { name: 'endCursor', args?: [] | false, alias?: string  } 

type PageInfoFields =
  | 'hasNextPage'
  | 'hasPreviousPage'
  | 'startCursor'
  | 'endCursor'



  

export interface PageInfoFieldDetails {
  hasNextPage: {
    type: 'Boolean'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: undefined
  }
  hasPreviousPage: {
    type: 'Boolean'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: undefined
  }
  startCursor: {
    type: 'String'
    args: {}
    description: string
    list: undefined
    nullable: true
    resolve: undefined
  }
  endCursor: {
    type: 'String'
    args: {}
    description: string
    list: undefined
    nullable: true
    resolve: undefined
  }
}
  

// Types for StudentEdge

type StudentEdgeObject =
  | StudentEdgeFields
  | { name: 'node', args?: [] | false, alias?: string  } 
  | { name: 'cursor', args?: [] | false, alias?: string  } 

type StudentEdgeFields =
  | 'node'
  | 'cursor'



  

export interface StudentEdgeFieldDetails {
  node: {
    type: 'Student'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: (
      root: core.RootValue<"StudentEdge">,
      args: {  }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.Student> | prisma.Student
  }
  cursor: {
    type: 'String'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: undefined
  }
}
  

// Types for AggregateStudent

type AggregateStudentObject =
  | AggregateStudentFields
  | { name: 'count', args?: [] | false, alias?: string  } 

type AggregateStudentFields =
  | 'count'



  

export interface AggregateStudentFieldDetails {
  count: {
    type: 'Int'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: undefined
  }
}
  

// Types for SubjectConnection

type SubjectConnectionObject =
  | SubjectConnectionFields
  | { name: 'pageInfo', args?: [] | false, alias?: string  } 
  | { name: 'edges', args?: [] | false, alias?: string  } 
  | { name: 'aggregate', args?: [] | false, alias?: string  } 

type SubjectConnectionFields =
  | 'pageInfo'
  | 'edges'
  | 'aggregate'



  

export interface SubjectConnectionFieldDetails {
  pageInfo: {
    type: 'PageInfo'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: (
      root: core.RootValue<"SubjectConnection">,
      args: {  }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.PageInfo> | prisma.PageInfo
  }
  edges: {
    type: 'SubjectEdge'
    args: {}
    description: string
    list: true
    nullable: false
    resolve: (
      root: core.RootValue<"SubjectConnection">,
      args: {  }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.SubjectEdge[]> | prisma.SubjectEdge[]
  }
  aggregate: {
    type: 'AggregateSubject'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: (
      root: core.RootValue<"SubjectConnection">,
      args: {  }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.AggregateSubject> | prisma.AggregateSubject
  }
}
  

// Types for SubjectEdge

type SubjectEdgeObject =
  | SubjectEdgeFields
  | { name: 'node', args?: [] | false, alias?: string  } 
  | { name: 'cursor', args?: [] | false, alias?: string  } 

type SubjectEdgeFields =
  | 'node'
  | 'cursor'



  

export interface SubjectEdgeFieldDetails {
  node: {
    type: 'Subject'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: (
      root: core.RootValue<"SubjectEdge">,
      args: {  }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.Subject> | prisma.Subject
  }
  cursor: {
    type: 'String'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: undefined
  }
}
  

// Types for AggregateSubject

type AggregateSubjectObject =
  | AggregateSubjectFields
  | { name: 'count', args?: [] | false, alias?: string  } 

type AggregateSubjectFields =
  | 'count'



  

export interface AggregateSubjectFieldDetails {
  count: {
    type: 'Int'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: undefined
  }
}
  

// Types for DegreeConnection

type DegreeConnectionObject =
  | DegreeConnectionFields
  | { name: 'pageInfo', args?: [] | false, alias?: string  } 
  | { name: 'edges', args?: [] | false, alias?: string  } 
  | { name: 'aggregate', args?: [] | false, alias?: string  } 

type DegreeConnectionFields =
  | 'pageInfo'
  | 'edges'
  | 'aggregate'



  

export interface DegreeConnectionFieldDetails {
  pageInfo: {
    type: 'PageInfo'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: (
      root: core.RootValue<"DegreeConnection">,
      args: {  }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.PageInfo> | prisma.PageInfo
  }
  edges: {
    type: 'DegreeEdge'
    args: {}
    description: string
    list: true
    nullable: false
    resolve: (
      root: core.RootValue<"DegreeConnection">,
      args: {  }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.DegreeEdge[]> | prisma.DegreeEdge[]
  }
  aggregate: {
    type: 'AggregateDegree'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: (
      root: core.RootValue<"DegreeConnection">,
      args: {  }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.AggregateDegree> | prisma.AggregateDegree
  }
}
  

// Types for DegreeEdge

type DegreeEdgeObject =
  | DegreeEdgeFields
  | { name: 'node', args?: [] | false, alias?: string  } 
  | { name: 'cursor', args?: [] | false, alias?: string  } 

type DegreeEdgeFields =
  | 'node'
  | 'cursor'



  

export interface DegreeEdgeFieldDetails {
  node: {
    type: 'Degree'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: (
      root: core.RootValue<"DegreeEdge">,
      args: {  }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.Degree> | prisma.Degree
  }
  cursor: {
    type: 'String'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: undefined
  }
}
  

// Types for AggregateDegree

type AggregateDegreeObject =
  | AggregateDegreeFields
  | { name: 'count', args?: [] | false, alias?: string  } 

type AggregateDegreeFields =
  | 'count'



  

export interface AggregateDegreeFieldDetails {
  count: {
    type: 'Int'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: undefined
  }
}
  

// Types for DepartmentConnection

type DepartmentConnectionObject =
  | DepartmentConnectionFields
  | { name: 'pageInfo', args?: [] | false, alias?: string  } 
  | { name: 'edges', args?: [] | false, alias?: string  } 
  | { name: 'aggregate', args?: [] | false, alias?: string  } 

type DepartmentConnectionFields =
  | 'pageInfo'
  | 'edges'
  | 'aggregate'



  

export interface DepartmentConnectionFieldDetails {
  pageInfo: {
    type: 'PageInfo'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: (
      root: core.RootValue<"DepartmentConnection">,
      args: {  }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.PageInfo> | prisma.PageInfo
  }
  edges: {
    type: 'DepartmentEdge'
    args: {}
    description: string
    list: true
    nullable: false
    resolve: (
      root: core.RootValue<"DepartmentConnection">,
      args: {  }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.DepartmentEdge[]> | prisma.DepartmentEdge[]
  }
  aggregate: {
    type: 'AggregateDepartment'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: (
      root: core.RootValue<"DepartmentConnection">,
      args: {  }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.AggregateDepartment> | prisma.AggregateDepartment
  }
}
  

// Types for DepartmentEdge

type DepartmentEdgeObject =
  | DepartmentEdgeFields
  | { name: 'node', args?: [] | false, alias?: string  } 
  | { name: 'cursor', args?: [] | false, alias?: string  } 

type DepartmentEdgeFields =
  | 'node'
  | 'cursor'



  

export interface DepartmentEdgeFieldDetails {
  node: {
    type: 'Department'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: (
      root: core.RootValue<"DepartmentEdge">,
      args: {  }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.Department> | prisma.Department
  }
  cursor: {
    type: 'String'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: undefined
  }
}
  

// Types for AggregateDepartment

type AggregateDepartmentObject =
  | AggregateDepartmentFields
  | { name: 'count', args?: [] | false, alias?: string  } 

type AggregateDepartmentFields =
  | 'count'



  

export interface AggregateDepartmentFieldDetails {
  count: {
    type: 'Int'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: undefined
  }
}
  

// Types for CourseConnection

type CourseConnectionObject =
  | CourseConnectionFields
  | { name: 'pageInfo', args?: [] | false, alias?: string  } 
  | { name: 'edges', args?: [] | false, alias?: string  } 
  | { name: 'aggregate', args?: [] | false, alias?: string  } 

type CourseConnectionFields =
  | 'pageInfo'
  | 'edges'
  | 'aggregate'



  

export interface CourseConnectionFieldDetails {
  pageInfo: {
    type: 'PageInfo'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: (
      root: core.RootValue<"CourseConnection">,
      args: {  }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.PageInfo> | prisma.PageInfo
  }
  edges: {
    type: 'CourseEdge'
    args: {}
    description: string
    list: true
    nullable: false
    resolve: (
      root: core.RootValue<"CourseConnection">,
      args: {  }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.CourseEdge[]> | prisma.CourseEdge[]
  }
  aggregate: {
    type: 'AggregateCourse'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: (
      root: core.RootValue<"CourseConnection">,
      args: {  }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.AggregateCourse> | prisma.AggregateCourse
  }
}
  

// Types for CourseEdge

type CourseEdgeObject =
  | CourseEdgeFields
  | { name: 'node', args?: [] | false, alias?: string  } 
  | { name: 'cursor', args?: [] | false, alias?: string  } 

type CourseEdgeFields =
  | 'node'
  | 'cursor'



  

export interface CourseEdgeFieldDetails {
  node: {
    type: 'Course'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: (
      root: core.RootValue<"CourseEdge">,
      args: {  }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.Course> | prisma.Course
  }
  cursor: {
    type: 'String'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: undefined
  }
}
  

// Types for AggregateCourse

type AggregateCourseObject =
  | AggregateCourseFields
  | { name: 'count', args?: [] | false, alias?: string  } 

type AggregateCourseFields =
  | 'count'



  

export interface AggregateCourseFieldDetails {
  count: {
    type: 'Int'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: undefined
  }
}
  

// Types for Mutation

type MutationObject =
  | MutationFields
  | { name: 'createStudent', args?: MutationCreateStudentArgs[] | false, alias?: string  } 
  | { name: 'updateStudent', args?: MutationUpdateStudentArgs[] | false, alias?: string  } 
  | { name: 'updateManyStudents', args?: MutationUpdateManyStudentsArgs[] | false, alias?: string  } 
  | { name: 'upsertStudent', args?: MutationUpsertStudentArgs[] | false, alias?: string  } 
  | { name: 'deleteStudent', args?: MutationDeleteStudentArgs[] | false, alias?: string  } 
  | { name: 'deleteManyStudents', args?: MutationDeleteManyStudentsArgs[] | false, alias?: string  } 
  | { name: 'createSubject', args?: MutationCreateSubjectArgs[] | false, alias?: string  } 
  | { name: 'updateSubject', args?: MutationUpdateSubjectArgs[] | false, alias?: string  } 
  | { name: 'updateManySubjects', args?: MutationUpdateManySubjectsArgs[] | false, alias?: string  } 
  | { name: 'upsertSubject', args?: MutationUpsertSubjectArgs[] | false, alias?: string  } 
  | { name: 'deleteSubject', args?: MutationDeleteSubjectArgs[] | false, alias?: string  } 
  | { name: 'deleteManySubjects', args?: MutationDeleteManySubjectsArgs[] | false, alias?: string  } 
  | { name: 'createDegree', args?: MutationCreateDegreeArgs[] | false, alias?: string  } 
  | { name: 'updateDegree', args?: MutationUpdateDegreeArgs[] | false, alias?: string  } 
  | { name: 'updateManyDegrees', args?: MutationUpdateManyDegreesArgs[] | false, alias?: string  } 
  | { name: 'upsertDegree', args?: MutationUpsertDegreeArgs[] | false, alias?: string  } 
  | { name: 'deleteDegree', args?: MutationDeleteDegreeArgs[] | false, alias?: string  } 
  | { name: 'deleteManyDegrees', args?: MutationDeleteManyDegreesArgs[] | false, alias?: string  } 
  | { name: 'createDepartment', args?: MutationCreateDepartmentArgs[] | false, alias?: string  } 
  | { name: 'updateDepartment', args?: MutationUpdateDepartmentArgs[] | false, alias?: string  } 
  | { name: 'updateManyDepartments', args?: MutationUpdateManyDepartmentsArgs[] | false, alias?: string  } 
  | { name: 'upsertDepartment', args?: MutationUpsertDepartmentArgs[] | false, alias?: string  } 
  | { name: 'deleteDepartment', args?: MutationDeleteDepartmentArgs[] | false, alias?: string  } 
  | { name: 'deleteManyDepartments', args?: MutationDeleteManyDepartmentsArgs[] | false, alias?: string  } 
  | { name: 'createCourse', args?: MutationCreateCourseArgs[] | false, alias?: string  } 
  | { name: 'updateCourse', args?: MutationUpdateCourseArgs[] | false, alias?: string  } 
  | { name: 'updateManyCourses', args?: MutationUpdateManyCoursesArgs[] | false, alias?: string  } 
  | { name: 'upsertCourse', args?: MutationUpsertCourseArgs[] | false, alias?: string  } 
  | { name: 'deleteCourse', args?: MutationDeleteCourseArgs[] | false, alias?: string  } 
  | { name: 'deleteManyCourses', args?: MutationDeleteManyCoursesArgs[] | false, alias?: string  } 

type MutationFields =
  | 'createStudent'
  | 'updateStudent'
  | 'updateManyStudents'
  | 'upsertStudent'
  | 'deleteStudent'
  | 'deleteManyStudents'
  | 'createSubject'
  | 'updateSubject'
  | 'updateManySubjects'
  | 'upsertSubject'
  | 'deleteSubject'
  | 'deleteManySubjects'
  | 'createDegree'
  | 'updateDegree'
  | 'updateManyDegrees'
  | 'upsertDegree'
  | 'deleteDegree'
  | 'deleteManyDegrees'
  | 'createDepartment'
  | 'updateDepartment'
  | 'updateManyDepartments'
  | 'upsertDepartment'
  | 'deleteDepartment'
  | 'deleteManyDepartments'
  | 'createCourse'
  | 'updateCourse'
  | 'updateManyCourses'
  | 'upsertCourse'
  | 'deleteCourse'
  | 'deleteManyCourses'


type MutationCreateStudentArgs =
  | 'data'
type MutationUpdateStudentArgs =
  | 'data'
  | 'where'
type MutationUpdateManyStudentsArgs =
  | 'data'
  | 'where'
type MutationUpsertStudentArgs =
  | 'where'
  | 'create'
  | 'update'
type MutationDeleteStudentArgs =
  | 'where'
type MutationDeleteManyStudentsArgs =
  | 'where'
type MutationCreateSubjectArgs =
  | 'data'
type MutationUpdateSubjectArgs =
  | 'data'
  | 'where'
type MutationUpdateManySubjectsArgs =
  | 'data'
  | 'where'
type MutationUpsertSubjectArgs =
  | 'where'
  | 'create'
  | 'update'
type MutationDeleteSubjectArgs =
  | 'where'
type MutationDeleteManySubjectsArgs =
  | 'where'
type MutationCreateDegreeArgs =
  | 'data'
type MutationUpdateDegreeArgs =
  | 'data'
  | 'where'
type MutationUpdateManyDegreesArgs =
  | 'data'
  | 'where'
type MutationUpsertDegreeArgs =
  | 'where'
  | 'create'
  | 'update'
type MutationDeleteDegreeArgs =
  | 'where'
type MutationDeleteManyDegreesArgs =
  | 'where'
type MutationCreateDepartmentArgs =
  | 'data'
type MutationUpdateDepartmentArgs =
  | 'data'
  | 'where'
type MutationUpdateManyDepartmentsArgs =
  | 'data'
  | 'where'
type MutationUpsertDepartmentArgs =
  | 'where'
  | 'create'
  | 'update'
type MutationDeleteDepartmentArgs =
  | 'where'
type MutationDeleteManyDepartmentsArgs =
  | 'where'
type MutationCreateCourseArgs =
  | 'data'
type MutationUpdateCourseArgs =
  | 'data'
  | 'where'
type MutationUpdateManyCoursesArgs =
  | 'data'
  | 'where'
type MutationUpsertCourseArgs =
  | 'where'
  | 'create'
  | 'update'
type MutationDeleteCourseArgs =
  | 'where'
type MutationDeleteManyCoursesArgs =
  | 'where'
  

export interface MutationFieldDetails {
  createStudent: {
    type: 'Student'
    args: Record<MutationCreateStudentArgs, core.NexusArgDef<string>>
    description: string
    list: undefined
    nullable: false
    resolve: (
      root: core.RootValue<"Mutation">,
      args: { data: StudentCreateInput }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.Student> | prisma.Student
  }
  updateStudent: {
    type: 'Student'
    args: Record<MutationUpdateStudentArgs, core.NexusArgDef<string>>
    description: string
    list: undefined
    nullable: true
    resolve: (
      root: core.RootValue<"Mutation">,
      args: { data: StudentUpdateInput, where: StudentWhereUniqueInput }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.Student | null> | prisma.Student | null
  }
  updateManyStudents: {
    type: 'BatchPayload'
    args: Record<MutationUpdateManyStudentsArgs, core.NexusArgDef<string>>
    description: string
    list: undefined
    nullable: false
    resolve: (
      root: core.RootValue<"Mutation">,
      args: { data: StudentUpdateManyMutationInput, where?: StudentWhereInput | null }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.BatchPayload> | prisma.BatchPayload
  }
  upsertStudent: {
    type: 'Student'
    args: Record<MutationUpsertStudentArgs, core.NexusArgDef<string>>
    description: string
    list: undefined
    nullable: false
    resolve: (
      root: core.RootValue<"Mutation">,
      args: { where: StudentWhereUniqueInput, create: StudentCreateInput, update: StudentUpdateInput }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.Student> | prisma.Student
  }
  deleteStudent: {
    type: 'Student'
    args: Record<MutationDeleteStudentArgs, core.NexusArgDef<string>>
    description: string
    list: undefined
    nullable: true
    resolve: (
      root: core.RootValue<"Mutation">,
      args: { where: StudentWhereUniqueInput }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.Student | null> | prisma.Student | null
  }
  deleteManyStudents: {
    type: 'BatchPayload'
    args: Record<MutationDeleteManyStudentsArgs, core.NexusArgDef<string>>
    description: string
    list: undefined
    nullable: false
    resolve: (
      root: core.RootValue<"Mutation">,
      args: { where?: StudentWhereInput | null }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.BatchPayload> | prisma.BatchPayload
  }
  createSubject: {
    type: 'Subject'
    args: Record<MutationCreateSubjectArgs, core.NexusArgDef<string>>
    description: string
    list: undefined
    nullable: false
    resolve: (
      root: core.RootValue<"Mutation">,
      args: { data: SubjectCreateInput }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.Subject> | prisma.Subject
  }
  updateSubject: {
    type: 'Subject'
    args: Record<MutationUpdateSubjectArgs, core.NexusArgDef<string>>
    description: string
    list: undefined
    nullable: true
    resolve: (
      root: core.RootValue<"Mutation">,
      args: { data: SubjectUpdateInput, where: SubjectWhereUniqueInput }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.Subject | null> | prisma.Subject | null
  }
  updateManySubjects: {
    type: 'BatchPayload'
    args: Record<MutationUpdateManySubjectsArgs, core.NexusArgDef<string>>
    description: string
    list: undefined
    nullable: false
    resolve: (
      root: core.RootValue<"Mutation">,
      args: { data: SubjectUpdateManyMutationInput, where?: SubjectWhereInput | null }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.BatchPayload> | prisma.BatchPayload
  }
  upsertSubject: {
    type: 'Subject'
    args: Record<MutationUpsertSubjectArgs, core.NexusArgDef<string>>
    description: string
    list: undefined
    nullable: false
    resolve: (
      root: core.RootValue<"Mutation">,
      args: { where: SubjectWhereUniqueInput, create: SubjectCreateInput, update: SubjectUpdateInput }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.Subject> | prisma.Subject
  }
  deleteSubject: {
    type: 'Subject'
    args: Record<MutationDeleteSubjectArgs, core.NexusArgDef<string>>
    description: string
    list: undefined
    nullable: true
    resolve: (
      root: core.RootValue<"Mutation">,
      args: { where: SubjectWhereUniqueInput }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.Subject | null> | prisma.Subject | null
  }
  deleteManySubjects: {
    type: 'BatchPayload'
    args: Record<MutationDeleteManySubjectsArgs, core.NexusArgDef<string>>
    description: string
    list: undefined
    nullable: false
    resolve: (
      root: core.RootValue<"Mutation">,
      args: { where?: SubjectWhereInput | null }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.BatchPayload> | prisma.BatchPayload
  }
  createDegree: {
    type: 'Degree'
    args: Record<MutationCreateDegreeArgs, core.NexusArgDef<string>>
    description: string
    list: undefined
    nullable: false
    resolve: (
      root: core.RootValue<"Mutation">,
      args: { data: DegreeCreateInput }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.Degree> | prisma.Degree
  }
  updateDegree: {
    type: 'Degree'
    args: Record<MutationUpdateDegreeArgs, core.NexusArgDef<string>>
    description: string
    list: undefined
    nullable: true
    resolve: (
      root: core.RootValue<"Mutation">,
      args: { data: DegreeUpdateInput, where: DegreeWhereUniqueInput }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.Degree | null> | prisma.Degree | null
  }
  updateManyDegrees: {
    type: 'BatchPayload'
    args: Record<MutationUpdateManyDegreesArgs, core.NexusArgDef<string>>
    description: string
    list: undefined
    nullable: false
    resolve: (
      root: core.RootValue<"Mutation">,
      args: { data: DegreeUpdateManyMutationInput, where?: DegreeWhereInput | null }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.BatchPayload> | prisma.BatchPayload
  }
  upsertDegree: {
    type: 'Degree'
    args: Record<MutationUpsertDegreeArgs, core.NexusArgDef<string>>
    description: string
    list: undefined
    nullable: false
    resolve: (
      root: core.RootValue<"Mutation">,
      args: { where: DegreeWhereUniqueInput, create: DegreeCreateInput, update: DegreeUpdateInput }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.Degree> | prisma.Degree
  }
  deleteDegree: {
    type: 'Degree'
    args: Record<MutationDeleteDegreeArgs, core.NexusArgDef<string>>
    description: string
    list: undefined
    nullable: true
    resolve: (
      root: core.RootValue<"Mutation">,
      args: { where: DegreeWhereUniqueInput }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.Degree | null> | prisma.Degree | null
  }
  deleteManyDegrees: {
    type: 'BatchPayload'
    args: Record<MutationDeleteManyDegreesArgs, core.NexusArgDef<string>>
    description: string
    list: undefined
    nullable: false
    resolve: (
      root: core.RootValue<"Mutation">,
      args: { where?: DegreeWhereInput | null }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.BatchPayload> | prisma.BatchPayload
  }
  createDepartment: {
    type: 'Department'
    args: Record<MutationCreateDepartmentArgs, core.NexusArgDef<string>>
    description: string
    list: undefined
    nullable: false
    resolve: (
      root: core.RootValue<"Mutation">,
      args: { data: DepartmentCreateInput }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.Department> | prisma.Department
  }
  updateDepartment: {
    type: 'Department'
    args: Record<MutationUpdateDepartmentArgs, core.NexusArgDef<string>>
    description: string
    list: undefined
    nullable: true
    resolve: (
      root: core.RootValue<"Mutation">,
      args: { data: DepartmentUpdateInput, where: DepartmentWhereUniqueInput }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.Department | null> | prisma.Department | null
  }
  updateManyDepartments: {
    type: 'BatchPayload'
    args: Record<MutationUpdateManyDepartmentsArgs, core.NexusArgDef<string>>
    description: string
    list: undefined
    nullable: false
    resolve: (
      root: core.RootValue<"Mutation">,
      args: { data: DepartmentUpdateManyMutationInput, where?: DepartmentWhereInput | null }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.BatchPayload> | prisma.BatchPayload
  }
  upsertDepartment: {
    type: 'Department'
    args: Record<MutationUpsertDepartmentArgs, core.NexusArgDef<string>>
    description: string
    list: undefined
    nullable: false
    resolve: (
      root: core.RootValue<"Mutation">,
      args: { where: DepartmentWhereUniqueInput, create: DepartmentCreateInput, update: DepartmentUpdateInput }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.Department> | prisma.Department
  }
  deleteDepartment: {
    type: 'Department'
    args: Record<MutationDeleteDepartmentArgs, core.NexusArgDef<string>>
    description: string
    list: undefined
    nullable: true
    resolve: (
      root: core.RootValue<"Mutation">,
      args: { where: DepartmentWhereUniqueInput }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.Department | null> | prisma.Department | null
  }
  deleteManyDepartments: {
    type: 'BatchPayload'
    args: Record<MutationDeleteManyDepartmentsArgs, core.NexusArgDef<string>>
    description: string
    list: undefined
    nullable: false
    resolve: (
      root: core.RootValue<"Mutation">,
      args: { where?: DepartmentWhereInput | null }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.BatchPayload> | prisma.BatchPayload
  }
  createCourse: {
    type: 'Course'
    args: Record<MutationCreateCourseArgs, core.NexusArgDef<string>>
    description: string
    list: undefined
    nullable: false
    resolve: (
      root: core.RootValue<"Mutation">,
      args: { data: CourseCreateInput }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.Course> | prisma.Course
  }
  updateCourse: {
    type: 'Course'
    args: Record<MutationUpdateCourseArgs, core.NexusArgDef<string>>
    description: string
    list: undefined
    nullable: true
    resolve: (
      root: core.RootValue<"Mutation">,
      args: { data: CourseUpdateInput, where: CourseWhereUniqueInput }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.Course | null> | prisma.Course | null
  }
  updateManyCourses: {
    type: 'BatchPayload'
    args: Record<MutationUpdateManyCoursesArgs, core.NexusArgDef<string>>
    description: string
    list: undefined
    nullable: false
    resolve: (
      root: core.RootValue<"Mutation">,
      args: { data: CourseUpdateManyMutationInput, where?: CourseWhereInput | null }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.BatchPayload> | prisma.BatchPayload
  }
  upsertCourse: {
    type: 'Course'
    args: Record<MutationUpsertCourseArgs, core.NexusArgDef<string>>
    description: string
    list: undefined
    nullable: false
    resolve: (
      root: core.RootValue<"Mutation">,
      args: { where: CourseWhereUniqueInput, create: CourseCreateInput, update: CourseUpdateInput }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.Course> | prisma.Course
  }
  deleteCourse: {
    type: 'Course'
    args: Record<MutationDeleteCourseArgs, core.NexusArgDef<string>>
    description: string
    list: undefined
    nullable: true
    resolve: (
      root: core.RootValue<"Mutation">,
      args: { where: CourseWhereUniqueInput }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.Course | null> | prisma.Course | null
  }
  deleteManyCourses: {
    type: 'BatchPayload'
    args: Record<MutationDeleteManyCoursesArgs, core.NexusArgDef<string>>
    description: string
    list: undefined
    nullable: false
    resolve: (
      root: core.RootValue<"Mutation">,
      args: { where?: CourseWhereInput | null }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.BatchPayload> | prisma.BatchPayload
  }
}
  

// Types for BatchPayload

type BatchPayloadObject =
  | BatchPayloadFields
  | { name: 'count', args?: [] | false, alias?: string  } 

type BatchPayloadFields =
  | 'count'



  

export interface BatchPayloadFieldDetails {
  count: {
    type: 'Long'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: undefined
  }
}
  

// Types for Subscription

type SubscriptionObject =
  | SubscriptionFields
  | { name: 'student', args?: SubscriptionStudentArgs[] | false, alias?: string  } 
  | { name: 'subject', args?: SubscriptionSubjectArgs[] | false, alias?: string  } 
  | { name: 'degree', args?: SubscriptionDegreeArgs[] | false, alias?: string  } 
  | { name: 'department', args?: SubscriptionDepartmentArgs[] | false, alias?: string  } 
  | { name: 'course', args?: SubscriptionCourseArgs[] | false, alias?: string  } 

type SubscriptionFields =
  | 'student'
  | 'subject'
  | 'degree'
  | 'department'
  | 'course'


type SubscriptionStudentArgs =
  | 'where'
type SubscriptionSubjectArgs =
  | 'where'
type SubscriptionDegreeArgs =
  | 'where'
type SubscriptionDepartmentArgs =
  | 'where'
type SubscriptionCourseArgs =
  | 'where'
  

export interface SubscriptionFieldDetails {
  student: {
    type: 'StudentSubscriptionPayload'
    args: Record<SubscriptionStudentArgs, core.NexusArgDef<string>>
    description: string
    list: undefined
    nullable: true
    resolve: (
      root: core.RootValue<"Subscription">,
      args: { where?: StudentSubscriptionWhereInput | null }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.StudentSubscriptionPayload | null> | prisma.StudentSubscriptionPayload | null
  }
  subject: {
    type: 'SubjectSubscriptionPayload'
    args: Record<SubscriptionSubjectArgs, core.NexusArgDef<string>>
    description: string
    list: undefined
    nullable: true
    resolve: (
      root: core.RootValue<"Subscription">,
      args: { where?: SubjectSubscriptionWhereInput | null }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.SubjectSubscriptionPayload | null> | prisma.SubjectSubscriptionPayload | null
  }
  degree: {
    type: 'DegreeSubscriptionPayload'
    args: Record<SubscriptionDegreeArgs, core.NexusArgDef<string>>
    description: string
    list: undefined
    nullable: true
    resolve: (
      root: core.RootValue<"Subscription">,
      args: { where?: DegreeSubscriptionWhereInput | null }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.DegreeSubscriptionPayload | null> | prisma.DegreeSubscriptionPayload | null
  }
  department: {
    type: 'DepartmentSubscriptionPayload'
    args: Record<SubscriptionDepartmentArgs, core.NexusArgDef<string>>
    description: string
    list: undefined
    nullable: true
    resolve: (
      root: core.RootValue<"Subscription">,
      args: { where?: DepartmentSubscriptionWhereInput | null }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.DepartmentSubscriptionPayload | null> | prisma.DepartmentSubscriptionPayload | null
  }
  course: {
    type: 'CourseSubscriptionPayload'
    args: Record<SubscriptionCourseArgs, core.NexusArgDef<string>>
    description: string
    list: undefined
    nullable: true
    resolve: (
      root: core.RootValue<"Subscription">,
      args: { where?: CourseSubscriptionWhereInput | null }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.CourseSubscriptionPayload | null> | prisma.CourseSubscriptionPayload | null
  }
}
  

// Types for StudentSubscriptionPayload

type StudentSubscriptionPayloadObject =
  | StudentSubscriptionPayloadFields
  | { name: 'mutation', args?: [] | false, alias?: string  } 
  | { name: 'node', args?: [] | false, alias?: string  } 
  | { name: 'updatedFields', args?: [] | false, alias?: string  } 
  | { name: 'previousValues', args?: [] | false, alias?: string  } 

type StudentSubscriptionPayloadFields =
  | 'mutation'
  | 'node'
  | 'updatedFields'
  | 'previousValues'



  

export interface StudentSubscriptionPayloadFieldDetails {
  mutation: {
    type: 'MutationType'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: (
      root: core.RootValue<"StudentSubscriptionPayload">,
      args: {  }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.MutationType> | prisma.MutationType
  }
  node: {
    type: 'Student'
    args: {}
    description: string
    list: undefined
    nullable: true
    resolve: (
      root: core.RootValue<"StudentSubscriptionPayload">,
      args: {  }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.Student | null> | prisma.Student | null
  }
  updatedFields: {
    type: 'String'
    args: {}
    description: string
    list: true
    nullable: false
    resolve: undefined
  }
  previousValues: {
    type: 'StudentPreviousValues'
    args: {}
    description: string
    list: undefined
    nullable: true
    resolve: (
      root: core.RootValue<"StudentSubscriptionPayload">,
      args: {  }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.StudentPreviousValues | null> | prisma.StudentPreviousValues | null
  }
}
  

// Types for StudentPreviousValues

type StudentPreviousValuesObject =
  | StudentPreviousValuesFields
  | { name: 'id', args?: [] | false, alias?: string  } 
  | { name: 'name', args?: [] | false, alias?: string  } 

type StudentPreviousValuesFields =
  | 'id'
  | 'name'



  

export interface StudentPreviousValuesFieldDetails {
  id: {
    type: 'ID'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: undefined
  }
  name: {
    type: 'String'
    args: {}
    description: string
    list: undefined
    nullable: true
    resolve: undefined
  }
}
  

// Types for SubjectSubscriptionPayload

type SubjectSubscriptionPayloadObject =
  | SubjectSubscriptionPayloadFields
  | { name: 'mutation', args?: [] | false, alias?: string  } 
  | { name: 'node', args?: [] | false, alias?: string  } 
  | { name: 'updatedFields', args?: [] | false, alias?: string  } 
  | { name: 'previousValues', args?: [] | false, alias?: string  } 

type SubjectSubscriptionPayloadFields =
  | 'mutation'
  | 'node'
  | 'updatedFields'
  | 'previousValues'



  

export interface SubjectSubscriptionPayloadFieldDetails {
  mutation: {
    type: 'MutationType'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: (
      root: core.RootValue<"SubjectSubscriptionPayload">,
      args: {  }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.MutationType> | prisma.MutationType
  }
  node: {
    type: 'Subject'
    args: {}
    description: string
    list: undefined
    nullable: true
    resolve: (
      root: core.RootValue<"SubjectSubscriptionPayload">,
      args: {  }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.Subject | null> | prisma.Subject | null
  }
  updatedFields: {
    type: 'String'
    args: {}
    description: string
    list: true
    nullable: false
    resolve: undefined
  }
  previousValues: {
    type: 'SubjectPreviousValues'
    args: {}
    description: string
    list: undefined
    nullable: true
    resolve: (
      root: core.RootValue<"SubjectSubscriptionPayload">,
      args: {  }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.SubjectPreviousValues | null> | prisma.SubjectPreviousValues | null
  }
}
  

// Types for SubjectPreviousValues

type SubjectPreviousValuesObject =
  | SubjectPreviousValuesFields
  | { name: 'id', args?: [] | false, alias?: string  } 
  | { name: 'name', args?: [] | false, alias?: string  } 

type SubjectPreviousValuesFields =
  | 'id'
  | 'name'



  

export interface SubjectPreviousValuesFieldDetails {
  id: {
    type: 'ID'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: undefined
  }
  name: {
    type: 'String'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: undefined
  }
}
  

// Types for DegreeSubscriptionPayload

type DegreeSubscriptionPayloadObject =
  | DegreeSubscriptionPayloadFields
  | { name: 'mutation', args?: [] | false, alias?: string  } 
  | { name: 'node', args?: [] | false, alias?: string  } 
  | { name: 'updatedFields', args?: [] | false, alias?: string  } 
  | { name: 'previousValues', args?: [] | false, alias?: string  } 

type DegreeSubscriptionPayloadFields =
  | 'mutation'
  | 'node'
  | 'updatedFields'
  | 'previousValues'



  

export interface DegreeSubscriptionPayloadFieldDetails {
  mutation: {
    type: 'MutationType'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: (
      root: core.RootValue<"DegreeSubscriptionPayload">,
      args: {  }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.MutationType> | prisma.MutationType
  }
  node: {
    type: 'Degree'
    args: {}
    description: string
    list: undefined
    nullable: true
    resolve: (
      root: core.RootValue<"DegreeSubscriptionPayload">,
      args: {  }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.Degree | null> | prisma.Degree | null
  }
  updatedFields: {
    type: 'String'
    args: {}
    description: string
    list: true
    nullable: false
    resolve: undefined
  }
  previousValues: {
    type: 'DegreePreviousValues'
    args: {}
    description: string
    list: undefined
    nullable: true
    resolve: (
      root: core.RootValue<"DegreeSubscriptionPayload">,
      args: {  }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.DegreePreviousValues | null> | prisma.DegreePreviousValues | null
  }
}
  

// Types for DegreePreviousValues

type DegreePreviousValuesObject =
  | DegreePreviousValuesFields
  | { name: 'id', args?: [] | false, alias?: string  } 
  | { name: 'name', args?: [] | false, alias?: string  } 
  | { name: 'requiredCredits', args?: [] | false, alias?: string  } 

type DegreePreviousValuesFields =
  | 'id'
  | 'name'
  | 'requiredCredits'



  

export interface DegreePreviousValuesFieldDetails {
  id: {
    type: 'ID'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: undefined
  }
  name: {
    type: 'String'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: undefined
  }
  requiredCredits: {
    type: 'Int'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: undefined
  }
}
  

// Types for DepartmentSubscriptionPayload

type DepartmentSubscriptionPayloadObject =
  | DepartmentSubscriptionPayloadFields
  | { name: 'mutation', args?: [] | false, alias?: string  } 
  | { name: 'node', args?: [] | false, alias?: string  } 
  | { name: 'updatedFields', args?: [] | false, alias?: string  } 
  | { name: 'previousValues', args?: [] | false, alias?: string  } 

type DepartmentSubscriptionPayloadFields =
  | 'mutation'
  | 'node'
  | 'updatedFields'
  | 'previousValues'



  

export interface DepartmentSubscriptionPayloadFieldDetails {
  mutation: {
    type: 'MutationType'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: (
      root: core.RootValue<"DepartmentSubscriptionPayload">,
      args: {  }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.MutationType> | prisma.MutationType
  }
  node: {
    type: 'Department'
    args: {}
    description: string
    list: undefined
    nullable: true
    resolve: (
      root: core.RootValue<"DepartmentSubscriptionPayload">,
      args: {  }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.Department | null> | prisma.Department | null
  }
  updatedFields: {
    type: 'String'
    args: {}
    description: string
    list: true
    nullable: false
    resolve: undefined
  }
  previousValues: {
    type: 'DepartmentPreviousValues'
    args: {}
    description: string
    list: undefined
    nullable: true
    resolve: (
      root: core.RootValue<"DepartmentSubscriptionPayload">,
      args: {  }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.DepartmentPreviousValues | null> | prisma.DepartmentPreviousValues | null
  }
}
  

// Types for DepartmentPreviousValues

type DepartmentPreviousValuesObject =
  | DepartmentPreviousValuesFields
  | { name: 'id', args?: [] | false, alias?: string  } 
  | { name: 'name', args?: [] | false, alias?: string  } 

type DepartmentPreviousValuesFields =
  | 'id'
  | 'name'



  

export interface DepartmentPreviousValuesFieldDetails {
  id: {
    type: 'ID'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: undefined
  }
  name: {
    type: 'String'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: undefined
  }
}
  

// Types for CourseSubscriptionPayload

type CourseSubscriptionPayloadObject =
  | CourseSubscriptionPayloadFields
  | { name: 'mutation', args?: [] | false, alias?: string  } 
  | { name: 'node', args?: [] | false, alias?: string  } 
  | { name: 'updatedFields', args?: [] | false, alias?: string  } 
  | { name: 'previousValues', args?: [] | false, alias?: string  } 

type CourseSubscriptionPayloadFields =
  | 'mutation'
  | 'node'
  | 'updatedFields'
  | 'previousValues'



  

export interface CourseSubscriptionPayloadFieldDetails {
  mutation: {
    type: 'MutationType'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: (
      root: core.RootValue<"CourseSubscriptionPayload">,
      args: {  }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.MutationType> | prisma.MutationType
  }
  node: {
    type: 'Course'
    args: {}
    description: string
    list: undefined
    nullable: true
    resolve: (
      root: core.RootValue<"CourseSubscriptionPayload">,
      args: {  }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.Course | null> | prisma.Course | null
  }
  updatedFields: {
    type: 'String'
    args: {}
    description: string
    list: true
    nullable: false
    resolve: undefined
  }
  previousValues: {
    type: 'CoursePreviousValues'
    args: {}
    description: string
    list: undefined
    nullable: true
    resolve: (
      root: core.RootValue<"CourseSubscriptionPayload">,
      args: {  }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.CoursePreviousValues | null> | prisma.CoursePreviousValues | null
  }
}
  

// Types for CoursePreviousValues

type CoursePreviousValuesObject =
  | CoursePreviousValuesFields
  | { name: 'id', args?: [] | false, alias?: string  } 
  | { name: 'name', args?: [] | false, alias?: string  } 
  | { name: 'number', args?: [] | false, alias?: string  } 
  | { name: 'level', args?: [] | false, alias?: string  } 
  | { name: 'credits', args?: [] | false, alias?: string  } 

type CoursePreviousValuesFields =
  | 'id'
  | 'name'
  | 'number'
  | 'level'
  | 'credits'



  

export interface CoursePreviousValuesFieldDetails {
  id: {
    type: 'ID'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: undefined
  }
  name: {
    type: 'String'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: undefined
  }
  number: {
    type: 'String'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: undefined
  }
  level: {
    type: 'Int'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: undefined
  }
  credits: {
    type: 'Int'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: undefined
  }
}
  


export interface StudentWhereUniqueInput {
  id?: string | null
}
export type StudentWhereUniqueInputInputObject =
  | Extract<keyof StudentWhereUniqueInput, string>
  | { name: 'id', alias?: string  } 
  
export interface CourseWhereInput {
  id?: string | null
  id_not?: string | null
  id_in?: string[]
  id_not_in?: string[]
  id_lt?: string | null
  id_lte?: string | null
  id_gt?: string | null
  id_gte?: string | null
  id_contains?: string | null
  id_not_contains?: string | null
  id_starts_with?: string | null
  id_not_starts_with?: string | null
  id_ends_with?: string | null
  id_not_ends_with?: string | null
  name?: string | null
  name_not?: string | null
  name_in?: string[]
  name_not_in?: string[]
  name_lt?: string | null
  name_lte?: string | null
  name_gt?: string | null
  name_gte?: string | null
  name_contains?: string | null
  name_not_contains?: string | null
  name_starts_with?: string | null
  name_not_starts_with?: string | null
  name_ends_with?: string | null
  name_not_ends_with?: string | null
  number?: string | null
  number_not?: string | null
  number_in?: string[]
  number_not_in?: string[]
  number_lt?: string | null
  number_lte?: string | null
  number_gt?: string | null
  number_gte?: string | null
  number_contains?: string | null
  number_not_contains?: string | null
  number_starts_with?: string | null
  number_not_starts_with?: string | null
  number_ends_with?: string | null
  number_not_ends_with?: string | null
  level?: number | null
  level_not?: number | null
  level_in?: number[]
  level_not_in?: number[]
  level_lt?: number | null
  level_lte?: number | null
  level_gt?: number | null
  level_gte?: number | null
  credits?: number | null
  credits_not?: number | null
  credits_in?: number[]
  credits_not_in?: number[]
  credits_lt?: number | null
  credits_lte?: number | null
  credits_gt?: number | null
  credits_gte?: number | null
  subject?: SubjectWhereInput | null
  degree?: DegreeWhereInput | null
  department?: DepartmentWhereInput | null
  prerequisite?: CourseWhereInput | null
  AND?: CourseWhereInput[]
  OR?: CourseWhereInput[]
  NOT?: CourseWhereInput[]
}
export type CourseWhereInputInputObject =
  | Extract<keyof CourseWhereInput, string>
  | { name: 'id', alias?: string  } 
  | { name: 'id_not', alias?: string  } 
  | { name: 'id_in', alias?: string  } 
  | { name: 'id_not_in', alias?: string  } 
  | { name: 'id_lt', alias?: string  } 
  | { name: 'id_lte', alias?: string  } 
  | { name: 'id_gt', alias?: string  } 
  | { name: 'id_gte', alias?: string  } 
  | { name: 'id_contains', alias?: string  } 
  | { name: 'id_not_contains', alias?: string  } 
  | { name: 'id_starts_with', alias?: string  } 
  | { name: 'id_not_starts_with', alias?: string  } 
  | { name: 'id_ends_with', alias?: string  } 
  | { name: 'id_not_ends_with', alias?: string  } 
  | { name: 'name', alias?: string  } 
  | { name: 'name_not', alias?: string  } 
  | { name: 'name_in', alias?: string  } 
  | { name: 'name_not_in', alias?: string  } 
  | { name: 'name_lt', alias?: string  } 
  | { name: 'name_lte', alias?: string  } 
  | { name: 'name_gt', alias?: string  } 
  | { name: 'name_gte', alias?: string  } 
  | { name: 'name_contains', alias?: string  } 
  | { name: 'name_not_contains', alias?: string  } 
  | { name: 'name_starts_with', alias?: string  } 
  | { name: 'name_not_starts_with', alias?: string  } 
  | { name: 'name_ends_with', alias?: string  } 
  | { name: 'name_not_ends_with', alias?: string  } 
  | { name: 'number', alias?: string  } 
  | { name: 'number_not', alias?: string  } 
  | { name: 'number_in', alias?: string  } 
  | { name: 'number_not_in', alias?: string  } 
  | { name: 'number_lt', alias?: string  } 
  | { name: 'number_lte', alias?: string  } 
  | { name: 'number_gt', alias?: string  } 
  | { name: 'number_gte', alias?: string  } 
  | { name: 'number_contains', alias?: string  } 
  | { name: 'number_not_contains', alias?: string  } 
  | { name: 'number_starts_with', alias?: string  } 
  | { name: 'number_not_starts_with', alias?: string  } 
  | { name: 'number_ends_with', alias?: string  } 
  | { name: 'number_not_ends_with', alias?: string  } 
  | { name: 'level', alias?: string  } 
  | { name: 'level_not', alias?: string  } 
  | { name: 'level_in', alias?: string  } 
  | { name: 'level_not_in', alias?: string  } 
  | { name: 'level_lt', alias?: string  } 
  | { name: 'level_lte', alias?: string  } 
  | { name: 'level_gt', alias?: string  } 
  | { name: 'level_gte', alias?: string  } 
  | { name: 'credits', alias?: string  } 
  | { name: 'credits_not', alias?: string  } 
  | { name: 'credits_in', alias?: string  } 
  | { name: 'credits_not_in', alias?: string  } 
  | { name: 'credits_lt', alias?: string  } 
  | { name: 'credits_lte', alias?: string  } 
  | { name: 'credits_gt', alias?: string  } 
  | { name: 'credits_gte', alias?: string  } 
  | { name: 'subject', alias?: string  } 
  | { name: 'degree', alias?: string  } 
  | { name: 'department', alias?: string  } 
  | { name: 'prerequisite', alias?: string  } 
  | { name: 'AND', alias?: string  } 
  | { name: 'OR', alias?: string  } 
  | { name: 'NOT', alias?: string  } 
  
export interface SubjectWhereInput {
  id?: string | null
  id_not?: string | null
  id_in?: string[]
  id_not_in?: string[]
  id_lt?: string | null
  id_lte?: string | null
  id_gt?: string | null
  id_gte?: string | null
  id_contains?: string | null
  id_not_contains?: string | null
  id_starts_with?: string | null
  id_not_starts_with?: string | null
  id_ends_with?: string | null
  id_not_ends_with?: string | null
  name?: string | null
  name_not?: string | null
  name_in?: string[]
  name_not_in?: string[]
  name_lt?: string | null
  name_lte?: string | null
  name_gt?: string | null
  name_gte?: string | null
  name_contains?: string | null
  name_not_contains?: string | null
  name_starts_with?: string | null
  name_not_starts_with?: string | null
  name_ends_with?: string | null
  name_not_ends_with?: string | null
  AND?: SubjectWhereInput[]
  OR?: SubjectWhereInput[]
  NOT?: SubjectWhereInput[]
}
export type SubjectWhereInputInputObject =
  | Extract<keyof SubjectWhereInput, string>
  | { name: 'id', alias?: string  } 
  | { name: 'id_not', alias?: string  } 
  | { name: 'id_in', alias?: string  } 
  | { name: 'id_not_in', alias?: string  } 
  | { name: 'id_lt', alias?: string  } 
  | { name: 'id_lte', alias?: string  } 
  | { name: 'id_gt', alias?: string  } 
  | { name: 'id_gte', alias?: string  } 
  | { name: 'id_contains', alias?: string  } 
  | { name: 'id_not_contains', alias?: string  } 
  | { name: 'id_starts_with', alias?: string  } 
  | { name: 'id_not_starts_with', alias?: string  } 
  | { name: 'id_ends_with', alias?: string  } 
  | { name: 'id_not_ends_with', alias?: string  } 
  | { name: 'name', alias?: string  } 
  | { name: 'name_not', alias?: string  } 
  | { name: 'name_in', alias?: string  } 
  | { name: 'name_not_in', alias?: string  } 
  | { name: 'name_lt', alias?: string  } 
  | { name: 'name_lte', alias?: string  } 
  | { name: 'name_gt', alias?: string  } 
  | { name: 'name_gte', alias?: string  } 
  | { name: 'name_contains', alias?: string  } 
  | { name: 'name_not_contains', alias?: string  } 
  | { name: 'name_starts_with', alias?: string  } 
  | { name: 'name_not_starts_with', alias?: string  } 
  | { name: 'name_ends_with', alias?: string  } 
  | { name: 'name_not_ends_with', alias?: string  } 
  | { name: 'AND', alias?: string  } 
  | { name: 'OR', alias?: string  } 
  | { name: 'NOT', alias?: string  } 
  
export interface DegreeWhereInput {
  id?: string | null
  id_not?: string | null
  id_in?: string[]
  id_not_in?: string[]
  id_lt?: string | null
  id_lte?: string | null
  id_gt?: string | null
  id_gte?: string | null
  id_contains?: string | null
  id_not_contains?: string | null
  id_starts_with?: string | null
  id_not_starts_with?: string | null
  id_ends_with?: string | null
  id_not_ends_with?: string | null
  name?: string | null
  name_not?: string | null
  name_in?: string[]
  name_not_in?: string[]
  name_lt?: string | null
  name_lte?: string | null
  name_gt?: string | null
  name_gte?: string | null
  name_contains?: string | null
  name_not_contains?: string | null
  name_starts_with?: string | null
  name_not_starts_with?: string | null
  name_ends_with?: string | null
  name_not_ends_with?: string | null
  requiredCredits?: number | null
  requiredCredits_not?: number | null
  requiredCredits_in?: number[]
  requiredCredits_not_in?: number[]
  requiredCredits_lt?: number | null
  requiredCredits_lte?: number | null
  requiredCredits_gt?: number | null
  requiredCredits_gte?: number | null
  AND?: DegreeWhereInput[]
  OR?: DegreeWhereInput[]
  NOT?: DegreeWhereInput[]
}
export type DegreeWhereInputInputObject =
  | Extract<keyof DegreeWhereInput, string>
  | { name: 'id', alias?: string  } 
  | { name: 'id_not', alias?: string  } 
  | { name: 'id_in', alias?: string  } 
  | { name: 'id_not_in', alias?: string  } 
  | { name: 'id_lt', alias?: string  } 
  | { name: 'id_lte', alias?: string  } 
  | { name: 'id_gt', alias?: string  } 
  | { name: 'id_gte', alias?: string  } 
  | { name: 'id_contains', alias?: string  } 
  | { name: 'id_not_contains', alias?: string  } 
  | { name: 'id_starts_with', alias?: string  } 
  | { name: 'id_not_starts_with', alias?: string  } 
  | { name: 'id_ends_with', alias?: string  } 
  | { name: 'id_not_ends_with', alias?: string  } 
  | { name: 'name', alias?: string  } 
  | { name: 'name_not', alias?: string  } 
  | { name: 'name_in', alias?: string  } 
  | { name: 'name_not_in', alias?: string  } 
  | { name: 'name_lt', alias?: string  } 
  | { name: 'name_lte', alias?: string  } 
  | { name: 'name_gt', alias?: string  } 
  | { name: 'name_gte', alias?: string  } 
  | { name: 'name_contains', alias?: string  } 
  | { name: 'name_not_contains', alias?: string  } 
  | { name: 'name_starts_with', alias?: string  } 
  | { name: 'name_not_starts_with', alias?: string  } 
  | { name: 'name_ends_with', alias?: string  } 
  | { name: 'name_not_ends_with', alias?: string  } 
  | { name: 'requiredCredits', alias?: string  } 
  | { name: 'requiredCredits_not', alias?: string  } 
  | { name: 'requiredCredits_in', alias?: string  } 
  | { name: 'requiredCredits_not_in', alias?: string  } 
  | { name: 'requiredCredits_lt', alias?: string  } 
  | { name: 'requiredCredits_lte', alias?: string  } 
  | { name: 'requiredCredits_gt', alias?: string  } 
  | { name: 'requiredCredits_gte', alias?: string  } 
  | { name: 'AND', alias?: string  } 
  | { name: 'OR', alias?: string  } 
  | { name: 'NOT', alias?: string  } 
  
export interface DepartmentWhereInput {
  id?: string | null
  id_not?: string | null
  id_in?: string[]
  id_not_in?: string[]
  id_lt?: string | null
  id_lte?: string | null
  id_gt?: string | null
  id_gte?: string | null
  id_contains?: string | null
  id_not_contains?: string | null
  id_starts_with?: string | null
  id_not_starts_with?: string | null
  id_ends_with?: string | null
  id_not_ends_with?: string | null
  name?: string | null
  name_not?: string | null
  name_in?: string[]
  name_not_in?: string[]
  name_lt?: string | null
  name_lte?: string | null
  name_gt?: string | null
  name_gte?: string | null
  name_contains?: string | null
  name_not_contains?: string | null
  name_starts_with?: string | null
  name_not_starts_with?: string | null
  name_ends_with?: string | null
  name_not_ends_with?: string | null
  AND?: DepartmentWhereInput[]
  OR?: DepartmentWhereInput[]
  NOT?: DepartmentWhereInput[]
}
export type DepartmentWhereInputInputObject =
  | Extract<keyof DepartmentWhereInput, string>
  | { name: 'id', alias?: string  } 
  | { name: 'id_not', alias?: string  } 
  | { name: 'id_in', alias?: string  } 
  | { name: 'id_not_in', alias?: string  } 
  | { name: 'id_lt', alias?: string  } 
  | { name: 'id_lte', alias?: string  } 
  | { name: 'id_gt', alias?: string  } 
  | { name: 'id_gte', alias?: string  } 
  | { name: 'id_contains', alias?: string  } 
  | { name: 'id_not_contains', alias?: string  } 
  | { name: 'id_starts_with', alias?: string  } 
  | { name: 'id_not_starts_with', alias?: string  } 
  | { name: 'id_ends_with', alias?: string  } 
  | { name: 'id_not_ends_with', alias?: string  } 
  | { name: 'name', alias?: string  } 
  | { name: 'name_not', alias?: string  } 
  | { name: 'name_in', alias?: string  } 
  | { name: 'name_not_in', alias?: string  } 
  | { name: 'name_lt', alias?: string  } 
  | { name: 'name_lte', alias?: string  } 
  | { name: 'name_gt', alias?: string  } 
  | { name: 'name_gte', alias?: string  } 
  | { name: 'name_contains', alias?: string  } 
  | { name: 'name_not_contains', alias?: string  } 
  | { name: 'name_starts_with', alias?: string  } 
  | { name: 'name_not_starts_with', alias?: string  } 
  | { name: 'name_ends_with', alias?: string  } 
  | { name: 'name_not_ends_with', alias?: string  } 
  | { name: 'AND', alias?: string  } 
  | { name: 'OR', alias?: string  } 
  | { name: 'NOT', alias?: string  } 
  
export interface StudentWhereInput {
  id?: string | null
  id_not?: string | null
  id_in?: string[]
  id_not_in?: string[]
  id_lt?: string | null
  id_lte?: string | null
  id_gt?: string | null
  id_gte?: string | null
  id_contains?: string | null
  id_not_contains?: string | null
  id_starts_with?: string | null
  id_not_starts_with?: string | null
  id_ends_with?: string | null
  id_not_ends_with?: string | null
  name?: string | null
  name_not?: string | null
  name_in?: string[]
  name_not_in?: string[]
  name_lt?: string | null
  name_lte?: string | null
  name_gt?: string | null
  name_gte?: string | null
  name_contains?: string | null
  name_not_contains?: string | null
  name_starts_with?: string | null
  name_not_starts_with?: string | null
  name_ends_with?: string | null
  name_not_ends_with?: string | null
  coursesPassed_every?: CourseWhereInput | null
  coursesPassed_some?: CourseWhereInput | null
  coursesPassed_none?: CourseWhereInput | null
  enrolledDegree?: DegreeWhereInput | null
  AND?: StudentWhereInput[]
  OR?: StudentWhereInput[]
  NOT?: StudentWhereInput[]
}
export type StudentWhereInputInputObject =
  | Extract<keyof StudentWhereInput, string>
  | { name: 'id', alias?: string  } 
  | { name: 'id_not', alias?: string  } 
  | { name: 'id_in', alias?: string  } 
  | { name: 'id_not_in', alias?: string  } 
  | { name: 'id_lt', alias?: string  } 
  | { name: 'id_lte', alias?: string  } 
  | { name: 'id_gt', alias?: string  } 
  | { name: 'id_gte', alias?: string  } 
  | { name: 'id_contains', alias?: string  } 
  | { name: 'id_not_contains', alias?: string  } 
  | { name: 'id_starts_with', alias?: string  } 
  | { name: 'id_not_starts_with', alias?: string  } 
  | { name: 'id_ends_with', alias?: string  } 
  | { name: 'id_not_ends_with', alias?: string  } 
  | { name: 'name', alias?: string  } 
  | { name: 'name_not', alias?: string  } 
  | { name: 'name_in', alias?: string  } 
  | { name: 'name_not_in', alias?: string  } 
  | { name: 'name_lt', alias?: string  } 
  | { name: 'name_lte', alias?: string  } 
  | { name: 'name_gt', alias?: string  } 
  | { name: 'name_gte', alias?: string  } 
  | { name: 'name_contains', alias?: string  } 
  | { name: 'name_not_contains', alias?: string  } 
  | { name: 'name_starts_with', alias?: string  } 
  | { name: 'name_not_starts_with', alias?: string  } 
  | { name: 'name_ends_with', alias?: string  } 
  | { name: 'name_not_ends_with', alias?: string  } 
  | { name: 'coursesPassed_every', alias?: string  } 
  | { name: 'coursesPassed_some', alias?: string  } 
  | { name: 'coursesPassed_none', alias?: string  } 
  | { name: 'enrolledDegree', alias?: string  } 
  | { name: 'AND', alias?: string  } 
  | { name: 'OR', alias?: string  } 
  | { name: 'NOT', alias?: string  } 
  
export interface SubjectWhereUniqueInput {
  id?: string | null
}
export type SubjectWhereUniqueInputInputObject =
  | Extract<keyof SubjectWhereUniqueInput, string>
  | { name: 'id', alias?: string  } 
  
export interface DegreeWhereUniqueInput {
  id?: string | null
}
export type DegreeWhereUniqueInputInputObject =
  | Extract<keyof DegreeWhereUniqueInput, string>
  | { name: 'id', alias?: string  } 
  
export interface DepartmentWhereUniqueInput {
  id?: string | null
}
export type DepartmentWhereUniqueInputInputObject =
  | Extract<keyof DepartmentWhereUniqueInput, string>
  | { name: 'id', alias?: string  } 
  
export interface CourseWhereUniqueInput {
  id?: string | null
}
export type CourseWhereUniqueInputInputObject =
  | Extract<keyof CourseWhereUniqueInput, string>
  | { name: 'id', alias?: string  } 
  
export interface StudentCreateInput {
  name?: string | null
  coursesPassed?: CourseCreateManyInput | null
  enrolledDegree?: DegreeCreateOneInput | null
}
export type StudentCreateInputInputObject =
  | Extract<keyof StudentCreateInput, string>
  | { name: 'name', alias?: string  } 
  | { name: 'coursesPassed', alias?: string  } 
  | { name: 'enrolledDegree', alias?: string  } 
  
export interface CourseCreateManyInput {
  create?: CourseCreateInput[]
  connect?: CourseWhereUniqueInput[]
}
export type CourseCreateManyInputInputObject =
  | Extract<keyof CourseCreateManyInput, string>
  | { name: 'create', alias?: string  } 
  | { name: 'connect', alias?: string  } 
  
export interface CourseCreateInput {
  name?: string
  number?: string
  level?: number
  credits?: number
  subject?: SubjectCreateOneInput | null
  degree?: DegreeCreateOneInput | null
  department?: DepartmentCreateOneInput | null
  prerequisite?: CourseCreateOneInput | null
}
export type CourseCreateInputInputObject =
  | Extract<keyof CourseCreateInput, string>
  | { name: 'name', alias?: string  } 
  | { name: 'number', alias?: string  } 
  | { name: 'level', alias?: string  } 
  | { name: 'credits', alias?: string  } 
  | { name: 'subject', alias?: string  } 
  | { name: 'degree', alias?: string  } 
  | { name: 'department', alias?: string  } 
  | { name: 'prerequisite', alias?: string  } 
  
export interface SubjectCreateOneInput {
  create?: SubjectCreateInput | null
  connect?: SubjectWhereUniqueInput | null
}
export type SubjectCreateOneInputInputObject =
  | Extract<keyof SubjectCreateOneInput, string>
  | { name: 'create', alias?: string  } 
  | { name: 'connect', alias?: string  } 
  
export interface SubjectCreateInput {
  name?: string
}
export type SubjectCreateInputInputObject =
  | Extract<keyof SubjectCreateInput, string>
  | { name: 'name', alias?: string  } 
  
export interface DegreeCreateOneInput {
  create?: DegreeCreateInput | null
  connect?: DegreeWhereUniqueInput | null
}
export type DegreeCreateOneInputInputObject =
  | Extract<keyof DegreeCreateOneInput, string>
  | { name: 'create', alias?: string  } 
  | { name: 'connect', alias?: string  } 
  
export interface DegreeCreateInput {
  name?: string
  requiredCredits?: number
}
export type DegreeCreateInputInputObject =
  | Extract<keyof DegreeCreateInput, string>
  | { name: 'name', alias?: string  } 
  | { name: 'requiredCredits', alias?: string  } 
  
export interface DepartmentCreateOneInput {
  create?: DepartmentCreateInput | null
  connect?: DepartmentWhereUniqueInput | null
}
export type DepartmentCreateOneInputInputObject =
  | Extract<keyof DepartmentCreateOneInput, string>
  | { name: 'create', alias?: string  } 
  | { name: 'connect', alias?: string  } 
  
export interface DepartmentCreateInput {
  name?: string
}
export type DepartmentCreateInputInputObject =
  | Extract<keyof DepartmentCreateInput, string>
  | { name: 'name', alias?: string  } 
  
export interface CourseCreateOneInput {
  create?: CourseCreateInput | null
  connect?: CourseWhereUniqueInput | null
}
export type CourseCreateOneInputInputObject =
  | Extract<keyof CourseCreateOneInput, string>
  | { name: 'create', alias?: string  } 
  | { name: 'connect', alias?: string  } 
  
export interface StudentUpdateInput {
  name?: string | null
  coursesPassed?: CourseUpdateManyInput | null
  enrolledDegree?: DegreeUpdateOneInput | null
}
export type StudentUpdateInputInputObject =
  | Extract<keyof StudentUpdateInput, string>
  | { name: 'name', alias?: string  } 
  | { name: 'coursesPassed', alias?: string  } 
  | { name: 'enrolledDegree', alias?: string  } 
  
export interface CourseUpdateManyInput {
  create?: CourseCreateInput[]
  update?: CourseUpdateWithWhereUniqueNestedInput[]
  upsert?: CourseUpsertWithWhereUniqueNestedInput[]
  delete?: CourseWhereUniqueInput[]
  connect?: CourseWhereUniqueInput[]
  set?: CourseWhereUniqueInput[]
  disconnect?: CourseWhereUniqueInput[]
  deleteMany?: CourseScalarWhereInput[]
  updateMany?: CourseUpdateManyWithWhereNestedInput[]
}
export type CourseUpdateManyInputInputObject =
  | Extract<keyof CourseUpdateManyInput, string>
  | { name: 'create', alias?: string  } 
  | { name: 'update', alias?: string  } 
  | { name: 'upsert', alias?: string  } 
  | { name: 'delete', alias?: string  } 
  | { name: 'connect', alias?: string  } 
  | { name: 'set', alias?: string  } 
  | { name: 'disconnect', alias?: string  } 
  | { name: 'deleteMany', alias?: string  } 
  | { name: 'updateMany', alias?: string  } 
  
export interface CourseUpdateWithWhereUniqueNestedInput {
  where?: CourseWhereUniqueInput
  data?: CourseUpdateDataInput
}
export type CourseUpdateWithWhereUniqueNestedInputInputObject =
  | Extract<keyof CourseUpdateWithWhereUniqueNestedInput, string>
  | { name: 'where', alias?: string  } 
  | { name: 'data', alias?: string  } 
  
export interface CourseUpdateDataInput {
  name?: string | null
  number?: string | null
  level?: number | null
  credits?: number | null
  subject?: SubjectUpdateOneInput | null
  degree?: DegreeUpdateOneInput | null
  department?: DepartmentUpdateOneInput | null
  prerequisite?: CourseUpdateOneInput | null
}
export type CourseUpdateDataInputInputObject =
  | Extract<keyof CourseUpdateDataInput, string>
  | { name: 'name', alias?: string  } 
  | { name: 'number', alias?: string  } 
  | { name: 'level', alias?: string  } 
  | { name: 'credits', alias?: string  } 
  | { name: 'subject', alias?: string  } 
  | { name: 'degree', alias?: string  } 
  | { name: 'department', alias?: string  } 
  | { name: 'prerequisite', alias?: string  } 
  
export interface SubjectUpdateOneInput {
  create?: SubjectCreateInput | null
  update?: SubjectUpdateDataInput | null
  upsert?: SubjectUpsertNestedInput | null
  delete?: boolean | null
  disconnect?: boolean | null
  connect?: SubjectWhereUniqueInput | null
}
export type SubjectUpdateOneInputInputObject =
  | Extract<keyof SubjectUpdateOneInput, string>
  | { name: 'create', alias?: string  } 
  | { name: 'update', alias?: string  } 
  | { name: 'upsert', alias?: string  } 
  | { name: 'delete', alias?: string  } 
  | { name: 'disconnect', alias?: string  } 
  | { name: 'connect', alias?: string  } 
  
export interface SubjectUpdateDataInput {
  name?: string | null
}
export type SubjectUpdateDataInputInputObject =
  | Extract<keyof SubjectUpdateDataInput, string>
  | { name: 'name', alias?: string  } 
  
export interface SubjectUpsertNestedInput {
  update?: SubjectUpdateDataInput
  create?: SubjectCreateInput
}
export type SubjectUpsertNestedInputInputObject =
  | Extract<keyof SubjectUpsertNestedInput, string>
  | { name: 'update', alias?: string  } 
  | { name: 'create', alias?: string  } 
  
export interface DegreeUpdateOneInput {
  create?: DegreeCreateInput | null
  update?: DegreeUpdateDataInput | null
  upsert?: DegreeUpsertNestedInput | null
  delete?: boolean | null
  disconnect?: boolean | null
  connect?: DegreeWhereUniqueInput | null
}
export type DegreeUpdateOneInputInputObject =
  | Extract<keyof DegreeUpdateOneInput, string>
  | { name: 'create', alias?: string  } 
  | { name: 'update', alias?: string  } 
  | { name: 'upsert', alias?: string  } 
  | { name: 'delete', alias?: string  } 
  | { name: 'disconnect', alias?: string  } 
  | { name: 'connect', alias?: string  } 
  
export interface DegreeUpdateDataInput {
  name?: string | null
  requiredCredits?: number | null
}
export type DegreeUpdateDataInputInputObject =
  | Extract<keyof DegreeUpdateDataInput, string>
  | { name: 'name', alias?: string  } 
  | { name: 'requiredCredits', alias?: string  } 
  
export interface DegreeUpsertNestedInput {
  update?: DegreeUpdateDataInput
  create?: DegreeCreateInput
}
export type DegreeUpsertNestedInputInputObject =
  | Extract<keyof DegreeUpsertNestedInput, string>
  | { name: 'update', alias?: string  } 
  | { name: 'create', alias?: string  } 
  
export interface DepartmentUpdateOneInput {
  create?: DepartmentCreateInput | null
  update?: DepartmentUpdateDataInput | null
  upsert?: DepartmentUpsertNestedInput | null
  delete?: boolean | null
  disconnect?: boolean | null
  connect?: DepartmentWhereUniqueInput | null
}
export type DepartmentUpdateOneInputInputObject =
  | Extract<keyof DepartmentUpdateOneInput, string>
  | { name: 'create', alias?: string  } 
  | { name: 'update', alias?: string  } 
  | { name: 'upsert', alias?: string  } 
  | { name: 'delete', alias?: string  } 
  | { name: 'disconnect', alias?: string  } 
  | { name: 'connect', alias?: string  } 
  
export interface DepartmentUpdateDataInput {
  name?: string | null
}
export type DepartmentUpdateDataInputInputObject =
  | Extract<keyof DepartmentUpdateDataInput, string>
  | { name: 'name', alias?: string  } 
  
export interface DepartmentUpsertNestedInput {
  update?: DepartmentUpdateDataInput
  create?: DepartmentCreateInput
}
export type DepartmentUpsertNestedInputInputObject =
  | Extract<keyof DepartmentUpsertNestedInput, string>
  | { name: 'update', alias?: string  } 
  | { name: 'create', alias?: string  } 
  
export interface CourseUpdateOneInput {
  create?: CourseCreateInput | null
  update?: CourseUpdateDataInput | null
  upsert?: CourseUpsertNestedInput | null
  delete?: boolean | null
  disconnect?: boolean | null
  connect?: CourseWhereUniqueInput | null
}
export type CourseUpdateOneInputInputObject =
  | Extract<keyof CourseUpdateOneInput, string>
  | { name: 'create', alias?: string  } 
  | { name: 'update', alias?: string  } 
  | { name: 'upsert', alias?: string  } 
  | { name: 'delete', alias?: string  } 
  | { name: 'disconnect', alias?: string  } 
  | { name: 'connect', alias?: string  } 
  
export interface CourseUpsertNestedInput {
  update?: CourseUpdateDataInput
  create?: CourseCreateInput
}
export type CourseUpsertNestedInputInputObject =
  | Extract<keyof CourseUpsertNestedInput, string>
  | { name: 'update', alias?: string  } 
  | { name: 'create', alias?: string  } 
  
export interface CourseUpsertWithWhereUniqueNestedInput {
  where?: CourseWhereUniqueInput
  update?: CourseUpdateDataInput
  create?: CourseCreateInput
}
export type CourseUpsertWithWhereUniqueNestedInputInputObject =
  | Extract<keyof CourseUpsertWithWhereUniqueNestedInput, string>
  | { name: 'where', alias?: string  } 
  | { name: 'update', alias?: string  } 
  | { name: 'create', alias?: string  } 
  
export interface CourseScalarWhereInput {
  id?: string | null
  id_not?: string | null
  id_in?: string[]
  id_not_in?: string[]
  id_lt?: string | null
  id_lte?: string | null
  id_gt?: string | null
  id_gte?: string | null
  id_contains?: string | null
  id_not_contains?: string | null
  id_starts_with?: string | null
  id_not_starts_with?: string | null
  id_ends_with?: string | null
  id_not_ends_with?: string | null
  name?: string | null
  name_not?: string | null
  name_in?: string[]
  name_not_in?: string[]
  name_lt?: string | null
  name_lte?: string | null
  name_gt?: string | null
  name_gte?: string | null
  name_contains?: string | null
  name_not_contains?: string | null
  name_starts_with?: string | null
  name_not_starts_with?: string | null
  name_ends_with?: string | null
  name_not_ends_with?: string | null
  number?: string | null
  number_not?: string | null
  number_in?: string[]
  number_not_in?: string[]
  number_lt?: string | null
  number_lte?: string | null
  number_gt?: string | null
  number_gte?: string | null
  number_contains?: string | null
  number_not_contains?: string | null
  number_starts_with?: string | null
  number_not_starts_with?: string | null
  number_ends_with?: string | null
  number_not_ends_with?: string | null
  level?: number | null
  level_not?: number | null
  level_in?: number[]
  level_not_in?: number[]
  level_lt?: number | null
  level_lte?: number | null
  level_gt?: number | null
  level_gte?: number | null
  credits?: number | null
  credits_not?: number | null
  credits_in?: number[]
  credits_not_in?: number[]
  credits_lt?: number | null
  credits_lte?: number | null
  credits_gt?: number | null
  credits_gte?: number | null
  AND?: CourseScalarWhereInput[]
  OR?: CourseScalarWhereInput[]
  NOT?: CourseScalarWhereInput[]
}
export type CourseScalarWhereInputInputObject =
  | Extract<keyof CourseScalarWhereInput, string>
  | { name: 'id', alias?: string  } 
  | { name: 'id_not', alias?: string  } 
  | { name: 'id_in', alias?: string  } 
  | { name: 'id_not_in', alias?: string  } 
  | { name: 'id_lt', alias?: string  } 
  | { name: 'id_lte', alias?: string  } 
  | { name: 'id_gt', alias?: string  } 
  | { name: 'id_gte', alias?: string  } 
  | { name: 'id_contains', alias?: string  } 
  | { name: 'id_not_contains', alias?: string  } 
  | { name: 'id_starts_with', alias?: string  } 
  | { name: 'id_not_starts_with', alias?: string  } 
  | { name: 'id_ends_with', alias?: string  } 
  | { name: 'id_not_ends_with', alias?: string  } 
  | { name: 'name', alias?: string  } 
  | { name: 'name_not', alias?: string  } 
  | { name: 'name_in', alias?: string  } 
  | { name: 'name_not_in', alias?: string  } 
  | { name: 'name_lt', alias?: string  } 
  | { name: 'name_lte', alias?: string  } 
  | { name: 'name_gt', alias?: string  } 
  | { name: 'name_gte', alias?: string  } 
  | { name: 'name_contains', alias?: string  } 
  | { name: 'name_not_contains', alias?: string  } 
  | { name: 'name_starts_with', alias?: string  } 
  | { name: 'name_not_starts_with', alias?: string  } 
  | { name: 'name_ends_with', alias?: string  } 
  | { name: 'name_not_ends_with', alias?: string  } 
  | { name: 'number', alias?: string  } 
  | { name: 'number_not', alias?: string  } 
  | { name: 'number_in', alias?: string  } 
  | { name: 'number_not_in', alias?: string  } 
  | { name: 'number_lt', alias?: string  } 
  | { name: 'number_lte', alias?: string  } 
  | { name: 'number_gt', alias?: string  } 
  | { name: 'number_gte', alias?: string  } 
  | { name: 'number_contains', alias?: string  } 
  | { name: 'number_not_contains', alias?: string  } 
  | { name: 'number_starts_with', alias?: string  } 
  | { name: 'number_not_starts_with', alias?: string  } 
  | { name: 'number_ends_with', alias?: string  } 
  | { name: 'number_not_ends_with', alias?: string  } 
  | { name: 'level', alias?: string  } 
  | { name: 'level_not', alias?: string  } 
  | { name: 'level_in', alias?: string  } 
  | { name: 'level_not_in', alias?: string  } 
  | { name: 'level_lt', alias?: string  } 
  | { name: 'level_lte', alias?: string  } 
  | { name: 'level_gt', alias?: string  } 
  | { name: 'level_gte', alias?: string  } 
  | { name: 'credits', alias?: string  } 
  | { name: 'credits_not', alias?: string  } 
  | { name: 'credits_in', alias?: string  } 
  | { name: 'credits_not_in', alias?: string  } 
  | { name: 'credits_lt', alias?: string  } 
  | { name: 'credits_lte', alias?: string  } 
  | { name: 'credits_gt', alias?: string  } 
  | { name: 'credits_gte', alias?: string  } 
  | { name: 'AND', alias?: string  } 
  | { name: 'OR', alias?: string  } 
  | { name: 'NOT', alias?: string  } 
  
export interface CourseUpdateManyWithWhereNestedInput {
  where?: CourseScalarWhereInput
  data?: CourseUpdateManyDataInput
}
export type CourseUpdateManyWithWhereNestedInputInputObject =
  | Extract<keyof CourseUpdateManyWithWhereNestedInput, string>
  | { name: 'where', alias?: string  } 
  | { name: 'data', alias?: string  } 
  
export interface CourseUpdateManyDataInput {
  name?: string | null
  number?: string | null
  level?: number | null
  credits?: number | null
}
export type CourseUpdateManyDataInputInputObject =
  | Extract<keyof CourseUpdateManyDataInput, string>
  | { name: 'name', alias?: string  } 
  | { name: 'number', alias?: string  } 
  | { name: 'level', alias?: string  } 
  | { name: 'credits', alias?: string  } 
  
export interface StudentUpdateManyMutationInput {
  name?: string | null
}
export type StudentUpdateManyMutationInputInputObject =
  | Extract<keyof StudentUpdateManyMutationInput, string>
  | { name: 'name', alias?: string  } 
  
export interface SubjectUpdateInput {
  name?: string | null
}
export type SubjectUpdateInputInputObject =
  | Extract<keyof SubjectUpdateInput, string>
  | { name: 'name', alias?: string  } 
  
export interface SubjectUpdateManyMutationInput {
  name?: string | null
}
export type SubjectUpdateManyMutationInputInputObject =
  | Extract<keyof SubjectUpdateManyMutationInput, string>
  | { name: 'name', alias?: string  } 
  
export interface DegreeUpdateInput {
  name?: string | null
  requiredCredits?: number | null
}
export type DegreeUpdateInputInputObject =
  | Extract<keyof DegreeUpdateInput, string>
  | { name: 'name', alias?: string  } 
  | { name: 'requiredCredits', alias?: string  } 
  
export interface DegreeUpdateManyMutationInput {
  name?: string | null
  requiredCredits?: number | null
}
export type DegreeUpdateManyMutationInputInputObject =
  | Extract<keyof DegreeUpdateManyMutationInput, string>
  | { name: 'name', alias?: string  } 
  | { name: 'requiredCredits', alias?: string  } 
  
export interface DepartmentUpdateInput {
  name?: string | null
}
export type DepartmentUpdateInputInputObject =
  | Extract<keyof DepartmentUpdateInput, string>
  | { name: 'name', alias?: string  } 
  
export interface DepartmentUpdateManyMutationInput {
  name?: string | null
}
export type DepartmentUpdateManyMutationInputInputObject =
  | Extract<keyof DepartmentUpdateManyMutationInput, string>
  | { name: 'name', alias?: string  } 
  
export interface CourseUpdateInput {
  name?: string | null
  number?: string | null
  level?: number | null
  credits?: number | null
  subject?: SubjectUpdateOneInput | null
  degree?: DegreeUpdateOneInput | null
  department?: DepartmentUpdateOneInput | null
  prerequisite?: CourseUpdateOneInput | null
}
export type CourseUpdateInputInputObject =
  | Extract<keyof CourseUpdateInput, string>
  | { name: 'name', alias?: string  } 
  | { name: 'number', alias?: string  } 
  | { name: 'level', alias?: string  } 
  | { name: 'credits', alias?: string  } 
  | { name: 'subject', alias?: string  } 
  | { name: 'degree', alias?: string  } 
  | { name: 'department', alias?: string  } 
  | { name: 'prerequisite', alias?: string  } 
  
export interface CourseUpdateManyMutationInput {
  name?: string | null
  number?: string | null
  level?: number | null
  credits?: number | null
}
export type CourseUpdateManyMutationInputInputObject =
  | Extract<keyof CourseUpdateManyMutationInput, string>
  | { name: 'name', alias?: string  } 
  | { name: 'number', alias?: string  } 
  | { name: 'level', alias?: string  } 
  | { name: 'credits', alias?: string  } 
  
export interface StudentSubscriptionWhereInput {
  mutation_in?: prisma.MutationType[]
  updatedFields_contains?: string | null
  updatedFields_contains_every?: string[]
  updatedFields_contains_some?: string[]
  node?: StudentWhereInput | null
  AND?: StudentSubscriptionWhereInput[]
  OR?: StudentSubscriptionWhereInput[]
  NOT?: StudentSubscriptionWhereInput[]
}
export type StudentSubscriptionWhereInputInputObject =
  | Extract<keyof StudentSubscriptionWhereInput, string>
  | { name: 'mutation_in', alias?: string  } 
  | { name: 'updatedFields_contains', alias?: string  } 
  | { name: 'updatedFields_contains_every', alias?: string  } 
  | { name: 'updatedFields_contains_some', alias?: string  } 
  | { name: 'node', alias?: string  } 
  | { name: 'AND', alias?: string  } 
  | { name: 'OR', alias?: string  } 
  | { name: 'NOT', alias?: string  } 
  
export interface SubjectSubscriptionWhereInput {
  mutation_in?: prisma.MutationType[]
  updatedFields_contains?: string | null
  updatedFields_contains_every?: string[]
  updatedFields_contains_some?: string[]
  node?: SubjectWhereInput | null
  AND?: SubjectSubscriptionWhereInput[]
  OR?: SubjectSubscriptionWhereInput[]
  NOT?: SubjectSubscriptionWhereInput[]
}
export type SubjectSubscriptionWhereInputInputObject =
  | Extract<keyof SubjectSubscriptionWhereInput, string>
  | { name: 'mutation_in', alias?: string  } 
  | { name: 'updatedFields_contains', alias?: string  } 
  | { name: 'updatedFields_contains_every', alias?: string  } 
  | { name: 'updatedFields_contains_some', alias?: string  } 
  | { name: 'node', alias?: string  } 
  | { name: 'AND', alias?: string  } 
  | { name: 'OR', alias?: string  } 
  | { name: 'NOT', alias?: string  } 
  
export interface DegreeSubscriptionWhereInput {
  mutation_in?: prisma.MutationType[]
  updatedFields_contains?: string | null
  updatedFields_contains_every?: string[]
  updatedFields_contains_some?: string[]
  node?: DegreeWhereInput | null
  AND?: DegreeSubscriptionWhereInput[]
  OR?: DegreeSubscriptionWhereInput[]
  NOT?: DegreeSubscriptionWhereInput[]
}
export type DegreeSubscriptionWhereInputInputObject =
  | Extract<keyof DegreeSubscriptionWhereInput, string>
  | { name: 'mutation_in', alias?: string  } 
  | { name: 'updatedFields_contains', alias?: string  } 
  | { name: 'updatedFields_contains_every', alias?: string  } 
  | { name: 'updatedFields_contains_some', alias?: string  } 
  | { name: 'node', alias?: string  } 
  | { name: 'AND', alias?: string  } 
  | { name: 'OR', alias?: string  } 
  | { name: 'NOT', alias?: string  } 
  
export interface DepartmentSubscriptionWhereInput {
  mutation_in?: prisma.MutationType[]
  updatedFields_contains?: string | null
  updatedFields_contains_every?: string[]
  updatedFields_contains_some?: string[]
  node?: DepartmentWhereInput | null
  AND?: DepartmentSubscriptionWhereInput[]
  OR?: DepartmentSubscriptionWhereInput[]
  NOT?: DepartmentSubscriptionWhereInput[]
}
export type DepartmentSubscriptionWhereInputInputObject =
  | Extract<keyof DepartmentSubscriptionWhereInput, string>
  | { name: 'mutation_in', alias?: string  } 
  | { name: 'updatedFields_contains', alias?: string  } 
  | { name: 'updatedFields_contains_every', alias?: string  } 
  | { name: 'updatedFields_contains_some', alias?: string  } 
  | { name: 'node', alias?: string  } 
  | { name: 'AND', alias?: string  } 
  | { name: 'OR', alias?: string  } 
  | { name: 'NOT', alias?: string  } 
  
export interface CourseSubscriptionWhereInput {
  mutation_in?: prisma.MutationType[]
  updatedFields_contains?: string | null
  updatedFields_contains_every?: string[]
  updatedFields_contains_some?: string[]
  node?: CourseWhereInput | null
  AND?: CourseSubscriptionWhereInput[]
  OR?: CourseSubscriptionWhereInput[]
  NOT?: CourseSubscriptionWhereInput[]
}
export type CourseSubscriptionWhereInputInputObject =
  | Extract<keyof CourseSubscriptionWhereInput, string>
  | { name: 'mutation_in', alias?: string  } 
  | { name: 'updatedFields_contains', alias?: string  } 
  | { name: 'updatedFields_contains_every', alias?: string  } 
  | { name: 'updatedFields_contains_some', alias?: string  } 
  | { name: 'node', alias?: string  } 
  | { name: 'AND', alias?: string  } 
  | { name: 'OR', alias?: string  } 
  | { name: 'NOT', alias?: string  } 
  

export type CourseOrderByInputValues =
  | 'id_ASC'
  | 'id_DESC'
  | 'name_ASC'
  | 'name_DESC'
  | 'number_ASC'
  | 'number_DESC'
  | 'level_ASC'
  | 'level_DESC'
  | 'credits_ASC'
  | 'credits_DESC'
  | 'createdAt_ASC'
  | 'createdAt_DESC'
  | 'updatedAt_ASC'
  | 'updatedAt_DESC'
  
export type StudentOrderByInputValues =
  | 'id_ASC'
  | 'id_DESC'
  | 'name_ASC'
  | 'name_DESC'
  | 'createdAt_ASC'
  | 'createdAt_DESC'
  | 'updatedAt_ASC'
  | 'updatedAt_DESC'
  
export type SubjectOrderByInputValues =
  | 'id_ASC'
  | 'id_DESC'
  | 'name_ASC'
  | 'name_DESC'
  | 'createdAt_ASC'
  | 'createdAt_DESC'
  | 'updatedAt_ASC'
  | 'updatedAt_DESC'
  
export type DegreeOrderByInputValues =
  | 'id_ASC'
  | 'id_DESC'
  | 'name_ASC'
  | 'name_DESC'
  | 'requiredCredits_ASC'
  | 'requiredCredits_DESC'
  | 'createdAt_ASC'
  | 'createdAt_DESC'
  | 'updatedAt_ASC'
  | 'updatedAt_DESC'
  
export type DepartmentOrderByInputValues =
  | 'id_ASC'
  | 'id_DESC'
  | 'name_ASC'
  | 'name_DESC'
  | 'createdAt_ASC'
  | 'createdAt_DESC'
  | 'updatedAt_ASC'
  | 'updatedAt_DESC'
  
export type MutationTypeValues =
  | 'CREATED'
  | 'UPDATED'
  | 'DELETED'
  
  