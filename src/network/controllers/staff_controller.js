import StaffService from "../../services/staff_service.js";

export const addStaff = (async (req, res) => {

    if (!req.body.firstName || !req.body.lastName || !req.body.age) {
        return res.status(400).send('Missing required fields');
    }

    const newStaff = await StaffService.addStaff(req.body);

    res.json({
        id: newStaff.id,
        firstName: newStaff.firstName,
        lastName: newStaff.lastName,
        age: newStaff.age
    })
})

export const findStaff = (async (req, res) => {

    if (!req.body.firstName && !req.body.lastName && !req.body.age && !req.body.id) {
        return res.status(400).send('Missing required field');
    }

    const findStaff = await StaffService.findBy(req.body);

    res.json({
        id: findStaff.id,
        firstName: findStaff.firstName,
        lastName: findStaff.lastName,
        age: findStaff.age
    })
})

export const removeStaff = (async (req, res) => {

    if (!req.params.id) {
        return res.status(400).send('Missing required param');
    }

    const findStaff = await StaffService.findBy({
        id: req.params.id
    });

    await StaffService.removeStaff(findStaff);

    res.json({})
})