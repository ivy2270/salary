document.addEventListener('DOMContentLoaded', () => {
    const calculateBtn = document.getElementById('calculateBtn');
    const clearBtn = document.getElementById('clearBtn');
    const totalAmountSpan = document.getElementById('totalAmount');

    // 計算功能
    calculateBtn.addEventListener('click', () => {
        // 取得所有輸入框的值，並轉換為數字
        const nhisRatio = parseFloat(document.getElementById('nhisRatio').value) / 100 || 0;
        const selfPayRatio = parseFloat(document.getElementById('selfPayRatio').value) / 100 || 0;
        const nhisIncome = parseFloat(document.getElementById('nhisIncome').value) || 0;
        const sopCost = parseFloat(document.getElementById('sopCost').value) || 0;
        const selfPayIncome = parseFloat(document.getElementById('selfPayIncome').value) || 0;
        const technicianCost = parseFloat(document.getElementById('technicianCost').value) || 0;
        const mealCost = parseFloat(document.getElementById('mealCost').value) || 0;
        const otherCost = parseFloat(document.getElementById('otherCost').value) || 0;

        // 進行計算
        const total = (nhisIncome - sopCost) * 0.9 * nhisRatio + (selfPayIncome - technicianCost) * selfPayRatio - mealCost - otherCost;

        // 顯示結果，並保留兩位小數
        totalAmountSpan.textContent = total.toFixed(2);
    });

    // 清除功能
    clearBtn.addEventListener('click', () => {
        // 選擇所有輸入框
        const inputs = document.querySelectorAll('input[type="number"]');
        
        // 將所有輸入框的值重設為0
        inputs.forEach(input => {
            // 除了健保成數和自費成數外，其他都清為0
            if (input.id === 'nhisRatio' || input.id === 'selfPayRatio') {
                input.value = 100;
            } else {
                input.value = 0;
            }
        });

        // 將顯示結果重設為0
        totalAmountSpan.textContent = '0';
    });
});