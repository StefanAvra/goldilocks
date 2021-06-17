def get_intensity(values: []):
    intensity = []
    for val in values:
        intensity.append(scale(val, values, [0,1]))
    return intensity


def scale(val, src, dst):
    return ((val - min(src)) / (max(src) - min(src))) * (dst[1]-dst[0]) + dst[0]

