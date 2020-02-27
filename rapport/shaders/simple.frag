#version 330 core

in vec3 v_color;
in vec3 v_normal;
in vec3 v_view;
in vec2 v_tex;

uniform vec3 lightDir;
uniform sampler2D tex2D0;
uniform sampler2D tex2D1;
uniform sampler2D tex2D2;
uniform sampler2D tex2D3;
uniform sampler2D tex2D4;
uniform sampler2D tex2D5;

out vec4 out_color;

vec3 blinn(vec3 n, vec3 v, vec3 l, vec3 dCol, vec3 sCol, float s)
{
  vec3 res = vec3(0,0,0);
  float dc = max(0,dot(n,l));
  if(dc>0) {
    res = dCol * dc;
    float sc = max(0,dot(n,normalize(v+l)));
    if(sc>0)
      res += sCol * pow(sc,s) * dc;
  }
  return res;
}

void main(void) {
  /* base */
  float ambient = 0.0;
  float shininess = 50;
  vec3 spec_color = vec3(1,1,1);

  /* changement de couleurs */
  //out_color = vec4(ambient * v_color + blinn(normalize(v_normal),normalize(v_view), lightDir, v_color, spec_color, shininess),1.0);
  //out_color = vec4(v_tex, 0, 1);
  //out_color = texture(tex2D0, v_tex);
  /*
  vec4 normalEarth = texture(tex2D0, v_tex);
  vec4 cloud = texture(tex2D1, v_tex);
  vec4 night = texture(tex2D2, v_tex);
  float poids = max(0,dot(normalize(v_normal),lightDir));
  //vec4 tmp = mix(normalEarth, cloud, cloud);
  vec4 tmp = mix(mix(normalEarth, cloud, cloud), night, poids);
  out_color = tmp;
  */

  /** filtrage **/
  //out_color = texture(tex2D3, v_tex);
  //out_color = texture(tex2D4, v_tex);
  out_color = texture(tex2D5, v_tex);
}
