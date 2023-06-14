export enum TeamAccessTypeEnum {
  ADMIN = "admin",
  MANAGER = "manager",
  USER = "user",
}

export type TeamModel = {
  id: number
  name: string
  email: string
  age: number
  phone: string
  access: TeamAccessTypeEnum
}