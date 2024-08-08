"use client";

// CREATE TABLE `testdb01`.`expenses` (
//   `id` INT NOT NULL AUTO_INCREMENT,
//   `title` VARCHAR(45) NOT NULL,
//   `description` VARCHAR(255) NULL,
//   `date` DATE NULL,
//   `amount` FLOAT NULL,
//   PRIMARY KEY (`id`)
// );

export default async function handleSavingExpense(
  e: any,
  formData: any
): Promise<void> {
  e.preventDefault();
  console.log(formData);
  await fetch("/api/expense/add", {
    method: "POST",
    body: JSON.stringify(formData),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      window.location.reload();
      console.log("Success:", data);
      alert("Expense saved successfully");
    })
    .catch((error) => {
      console.error("Error:", error);
      alert("Error saving expense");
    });
}
