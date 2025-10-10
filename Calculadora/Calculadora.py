import tkinter as tk
from mnsg_suma.LogicaSuma import add
from mnsg_resta.LogicaResta import abstract

first_number = None   
current_operator = None  

# Calculator logic
def click_button(value):
    global first_number, current_operator
    current_text = display.get()
    
    if value == "AC":
        display.delete(0, tk.END)
        first_number = None
        current_operator = None
    elif value == "⌫":
        display.delete(len(current_text)-1, tk.END)
    elif value in ["+", "-"]:
        try:
            first_number = float(current_text)
        except:
            first_number = 0
        current_operator = value
        display.delete(0, tk.END)
    elif value == "=":
        if first_number is not None and current_operator is not None:
            try:
                second_number = float(current_text)
            except:
                second_number = 0
            if current_operator == "+":
                result = add(first_number, second_number)
            else:
                result = abstract(first_number, second_number)
            display.delete(0, tk.END)
            display.insert(0, str(result))
            first_number = None
            current_operator = None
    else:
        display.insert(tk.END, value)

# GUI
root = tk.Tk()
root.title("Calculator")

display = tk.Entry(root, font=("Arial", 24), bd=5, relief=tk.RIDGE, justify="right")
display.grid(row=0, column=0, columnspan=4, sticky="we", padx=5, pady=5)

buttons = [
    ["7", "8", "9", "+"],
    ["4", "5", "6", "-"],
    ["1", "2", "3", "⌫"],
    ["0", ".", "AC", "="]
]

for row_index, row in enumerate(buttons):
    for col_index, value in enumerate(row):
        button = tk.Button(root, text=value, width=5, height=2, font=("Arial", 20),
                           command=lambda v=value: click_button(v))
        button.grid(row=row_index+1, column=col_index, padx=5, pady=5, sticky="nsew")

for i in range(len(buttons)):
    root.rowconfigure(i+1, weight=1)
for j in range(4):
    root.columnconfigure(j, weight=1)

root.mainloop()
