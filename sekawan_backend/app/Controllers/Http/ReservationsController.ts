import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Reservation from 'App/Models/Reservation'
import Approval from 'App/Models/Approval'

export default class ReservationsController {
    public async index({ response }: HttpContextContract) {
        
        try {
          const reservations = await Reservation
            .query()
            .preload('vehicle')
            .preload('employee')
            .preload('driver')
            .preload('approvals')

          return response.status(200).json(reservations)
        } catch (error) {
          console.error(error)
          return response.status(500).json({ error: 'An error occurred while fetching reservations' })
        }
    }

    public async create({ request, response }: HttpContextContract) {
        try {
            const {
                reservation_date,
                usage_start_date,
                usage_end_date,
                vehicle_id,
                employee_id,
                driver_id,
                user_id1,
                user_id2,
                reservation_status,
                approval_date,
            } = request.all();
            
            // Membuat data Reservation
            const reservation = await this.createReservation(
                reservation_date,
                usage_start_date,
                usage_end_date,
                vehicle_id,
                employee_id,
                driver_id,
                reservation_status
            );
            
            // Membuat data approval
            await this.createApproval(reservation.id, user_id1, approval_date);
            await this.createApproval(reservation.id, user_id2, approval_date);

            return response.status(201).json({ message: 'Reservation and Approval created successfully' });
            } catch (error) {
            console.error(error);
            return response.status(500).json({ error: 'An error occurred while creating the Reservation and Approval' });
        }
    }

    private async createApproval(reservation_id, user_id, approval_date) {
        const approval = new Approval();
        approval.reservationId = reservation_id;
        approval.userId = user_id;
        approval.approvalDate = approval_date;
        await approval.save();
        return approval;
    }

    private async createReservation(reservation_date, usage_start_date, usage_end_date, vehicle_id, employee_id, driver_id, reservation_status) {
        const reservation = new Reservation();
        reservation.reservationDate = reservation_date;
        reservation.usageStartDate = usage_start_date;
        reservation.usageEndDate = usage_end_date;
        reservation.vehicleId = vehicle_id;
        reservation.employeeId = employee_id;
        reservation.driverId = driver_id;
        reservation.reservationStatus = reservation_status;
        await reservation.save();
        return reservation;
    }
}
