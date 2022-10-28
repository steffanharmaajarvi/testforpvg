import Staff from "../models/staff.js";

class StaffService {
  async findBy(criteria) {
    return await Staff.findOne({
      where: criteria
    });
  }

  async addStaff(StaffData) {
    return Staff.create(StaffData);
  }

  async removeStaff(StaffData) {
    return StaffData.destroy({
      where: {
        id: StaffData.id
      }
    });
  }
}

export default new StaffService();