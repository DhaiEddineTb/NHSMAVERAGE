document.addEventListener("DOMContentLoaded", function () {
    function calculateAverage() {
        const examScores = document.querySelectorAll('.examScore');
        const workScores = document.querySelectorAll('.workScore');
        const coefficients = document.querySelectorAll('.coefficient');
        
        let totalWeightedAverage = 0;
        let totalCoefficient = 0;
        
        for (let i = 0; i < examScores.length; i++) {
            const examScore = parseFloat(examScores[i].value) || 0;
            const workScore = parseFloat(workScores[i].value) || 0;
            const coefficient = parseFloat(coefficients[i].value) || 0;
            
            const subjectAverage = (examScore + workScore) / 2;
            totalWeightedAverage += subjectAverage * coefficient;
            totalCoefficient += coefficient;
        }
        
        const generalAverage = totalCoefficient > 0 ? (totalWeightedAverage / totalCoefficient).toFixed(2) : 0;
        
        document.getElementById('result').textContent = `General Average: ${generalAverage}`;
    }
    
    document.querySelector(".button").addEventListener("click", calculateAverage);
});
