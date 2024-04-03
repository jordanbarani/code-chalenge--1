function calculate_demerit_points(speed){
   const speedLimit = 70
    
    if( speed <= speedLimit){
        return("Ok")}
    
      else if ((demeritPoints = (speed - speed_limit) / 5)<=12){
        return("Points:", demerit_points)}
        
     else   if( demeritPoints > 12){
            return("License suspended")}

speed = float(input("Enter the speed of the car (km/h): "))
    }
calculate_demerit_points(speed)
