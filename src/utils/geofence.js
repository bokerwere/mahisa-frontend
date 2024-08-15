const geofence = [
    [
      36.8358398,
      -1.3039559
    ],
    [
      36.8354589,
      -1.3021325
    ],
    [
      36.8354267,
      -1.3013173
    ],
    [
      36.8354277,
      -1.3008809
    ],
    [
      36.8361197,
      -1.3005108
    ],
    [
      36.8376056,
      -1.3002319
    ],
    [
      36.8383244,
      -1.300661
    ],
    [
      36.8387804,
      -1.3018033
    ],
    [
      36.8393276,
      -1.3027847
    ],
    [
      36.8392686,
      -1.3033049
    ],
    [
      36.8395545,
      -1.3037679
    ],
    [
      36.8393023,
      -1.3039396
    ],
    [
      36.8386908,
      -1.3040844
    ],
    [
      36.8374892,
      -1.3042613
    ],
    [
      36.8367577,
      -1.3041972
    ],
    [
      36.8360443,
      -1.3040524
    ],
    [
        36.8358398,
        -1.3039559
    ]
]

export const inside = (point) => {
    
    var x = point[0], y = point[1];
    
    var inside = false;
    for (var i = 0, j = geofence.length - 1; i < geofence.length; j = i++) {
        var xi = geofence[i][0], yi = geofence[i][1];
        var xj = geofence[j][0], yj = geofence[j][1];
        
        var intersect = ((yi > y) != (yj > y))
            && (x < (xj - xi) * (y - yi) / (yj - yi) + xi);
        if (intersect) inside = !inside;
    }
    
    return inside;
};