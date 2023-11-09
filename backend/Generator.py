import cv2
import sys
#fetch the names form firebase and store it in list_names
#Change these line according to your need
print(sys.argv[1])
list_names = [sys.argv[1]]

for index, name in enumerate(list_names):
    template = cv2.imread("public/DJSCE_temp.jpg")
    
    # Get the size of the text
    (text_width, text_height) = cv2.getTextSize(name, cv2.FONT_HERSHEY_SIMPLEX, 6, 18)[0]

    # Calculate the center position of the text
    x = (template.shape[1] - text_width) // 2
    y = 3200  # y-coordinate is fixed

    # Draw the text
    cv2.putText(template, name, (x, y), cv2.FONT_HERSHEY_SIMPLEX, 6, (62, 108, 118), 18,cv2.LINE_AA)

    cv2.imwrite("public/Certificates/" + name + ".jpg", template)
    print('Certificate Generated for ' + name + '!')
