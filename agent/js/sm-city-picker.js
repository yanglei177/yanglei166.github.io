+
function(a) {
	a.smConfig.rawCitiesData = [{
		"name": "北京市",
		"sub": [{
			"name": "请选择"
		}, ],
		"type": 0
	}, {
		"name": "广东",
		"sub": [{
			"name": "请选择",
		}, {
			"name": "广州市",
			"type": 0
		}, {
			"name": "深圳市",
			"type": 0
		}],
		"type": 1
	}, {
		"name": "天津市",
		"sub": [{
			"name": "请选择"
		}],
		"type": 0
	}, {
		"name": "重庆市",
		"sub": [{
			"name": "请选择"
		}],
		"type": 0
	}, {
		"name": "四川",
		"sub": [{
			"name": "请选择",
		}, {
			"name": "成都市",
			"type": 0
		}],
		"type": 0
	}, {
		"name": "河北",
		"sub": [{
			"name": "请选择",
		}, {
			"name": "石家庄市",
			"type": 0
		}],
		"type": 1
	}, {
		"name": "山东",
		"sub": [{
			"name": "请选择",
		}, {
			"name": "济南市",
			"type": 0
		}, {
			"name": "青岛市",
			"type": 0
		}],
		"type": 1
	}]
}(Zepto); +
function(f) {
	var i = function(q) {
			var o = [];
			for (var p = 0; p < q.length; p++) {
				var r = q[p];
				if (r.name === "请选择") {
					continue
				}
				o.push(r.name)
			}
			if (o.length) {
				return o
			}
			return [""]
		};
	var a = function(o) {
			if (!o.sub) {
				return [""]
			}
			return i(o.sub)
		};
	var c = function(p) {
			for (var o = 0; o < j.length; o++) {
				if (j[o].name === p) {
					return a(j[o])
				}
			}
			return [""]
		};
	var k = function(r, s) {
			for (var q = 0; q < j.length; q++) {
				if (j[q].name === r) {
					for (var o = 0; o < j[q].sub.length; o++) {
						if (j[q].sub[o].name === s) {
							return a(j[q].sub[o])
						}
					}
				}
			}
			return [""]
		};
	var j = f.smConfig.rawCitiesData;
	var l = j.map(function(o) {
		return o.name
	});
	var g = a(j[0]);
	var e = [""];
	var n = l[0];
	var b = g[0];
	var h = e[0];
	var m;
	var d = {
		cssClass: "city-picker",
		rotateEffect: false,
		onChange: function(p, o, s) {
			var q = p.cols[0].value;
			var r;
			if (q !== n) {
				clearTimeout(m);
				m = setTimeout(function() {
					var u = c(q);
					r = u[0];
					var t = k(q, r);
					p.cols[1].replaceValues(u);
					p.cols[2].replaceValues(t);
					n = q;
					b = r;
					p.updateValue()
				}, 200);
				return
			}
			r = p.cols[1].value;
			if (r !== b) {
				p.cols[2].replaceValues(k(q, r));
				b = r;
				p.updateValue()
			}
		},
		cols: [{
			textAlign: "center",
			values: l,
			cssClass: "col-province"
		}, {
			textAlign: "center",
			values: g,
			cssClass: "col-city"
		}, {
			textAlign: "center",
			values: e,
			cssClass: "col-district"
		}]
	};
	f.fn.cityPicker = function(o) {
		return this.each(function() {
			if (!this) {
				return
			}
			var q = f.extend(d, o);
			if (q.value) {
				f(this).val(q.value.join(" "))
			} else {
				var r = f(this).val();
				r && (q.value = r.split(" "))
			}
			if (q.value) {
				if (q.value[0]) {
					n = q.value[0];
					q.cols[1].values = c(q.value[0])
				}
				if (q.value[1]) {
					b = q.value[1];
					q.cols[2].values = k(q.value[0], q.value[1])
				} else {
					q.cols[2].values = k(q.value[0], q.cols[1].values[0])
				}!q.value[2] && (q.value[2] = "");
				h = q.value[2]
			}
			f(this).picker(q)
		})
	}
}(Zepto);