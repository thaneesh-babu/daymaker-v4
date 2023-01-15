TRAIN_DATA = [
    ("Exam 1 on Monday", {"entities": [(0, 6, "cal_event")]}),
    ("Quiz 4", {"entities": [(0, 6, "cal_event")]}),
    ("Assessment 1", {"entities": [(0, 12, "cal_event")]}),
    ("Weekly Assessment 3", {"entities": [(0, 19, "cal_event")]}),
    ("Test 2 coming up", {"entities": [(0, 6, "cal_event")]}),
    ("There is an exam 2 on Wednesday", {"entities": [(12, 18, "cal_event")]}),
    ("There will be a quiz 4 on Tuesday", {
     "entities": [(16, 20, "cal_event")]}),
    ("A weekly assessment is scheduled for tomorrow",
     {"entities": [(2, 19, "cal_event")]}),
    ("Be prepared for a studio quiz and exam on the same day", {
     "entities": [(25, 29, "cal_event"), (34, 38, "cal_event")]}),
    ("the final graded homework assignment will be due on Tuesday, December 7", {
     "entities": [(4, 37, "cal_event")]}),
    ("The common final exam will be administered online during our common final exam period on Thursday", {
        "entities": [(4, 22, "cal_event")]}),
    ("Midterm grades will be assigned on October 4", {
        "entities": [(0, 14, "cal_event")]}),

]