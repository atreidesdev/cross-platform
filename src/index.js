function f(x) {
	return x * x - x + 1;
}

function rightRiemannSum(func, a, b, n = 1000) {
	const dx = (b - a) / n;
	let sum = 0;

	for (let i = 1; i <= n; i++) {
		const x = a + i * dx;
		sum += func(x);
	}

	return sum * dx;
}

document.getElementById("integralForm").addEventListener("submit", (event) => {
	event.preventDefault();

	const a = parseFloat(document.getElementById("a").value);
	const b = parseFloat(document.getElementById("b").value);
	const n = parseInt(document.getElementById("n").value, 10);

	const resultElem = document.getElementById("result");

	if (isNaN(a) || isNaN(b) || isNaN(n) || n <= 0) {
		resultElem.textContent = "Ошибка: введите корректные числа a, b. n > 0.";
	} else {
		const result = rightRiemannSum(f, a, b, n);
		resultElem.textContent = `Приближённое значение интеграла от ${a} до ${b} при n=${n}: ${result.toFixed(6)}`;
	}
});
