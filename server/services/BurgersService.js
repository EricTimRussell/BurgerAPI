import { BadRequest } from "@bcwdev/auth0provider/lib/Errors.js"
import { BurgersDb } from "../db/BurgersDb.js"

class BurgersService {
  async removeBurger(burgerId) {
    const burger = await this.getBurgerById(burgerId)
    BurgersDb.burgers.splice(BurgersDb.burgers.indexOf(burger), 1)
  }
  async getBurgerById(burgerId) {
    const burger = BurgersDb.burgers.find(b => b.id == burgerId)
    if (!burger) {
      throw new BadRequest('invalid ID')
    }
    return burger
  }
  async getAllBurgers() {
    const res = await BurgersDb
    return res.burgers
  }
}
export const burgersService = new BurgersService()